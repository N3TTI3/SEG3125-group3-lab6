var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');
var path = require('path');

// read the data file
function readData(fileName){
    const filepath =path.join(__dirname, 'data', fileName + '.json');
    if (!fs.existsSync(filepath)){
        fs.mkdirSync(path.dirname(filepath), { recursive: true });
        fs.writeFileSync(filepath, '[]');
    }
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName){
    const filepath = path.join(__dirname, 'data', fileName + '.json');
     fs.mkdirSync(path.dirname(filepath), { recursive: true });
    const data = JSON.stringify(info, null, 2);
    fs.writeFileSync(filepath, data, 'utf-8');
}

// increment counts in per-question file
function combineCounts(name, value){
    // console.log(value);
    let info = readData(name);
     // will be useful for text entry, since the item typed in might not be in the list
    var found = 0;
    for (var i=0; i<info.length; i++){
        if (info[i][name] === value){
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
}

const responsesFile = path.join(__dirname, 'data', 'surveyResponses.json');

function ensureResponsesFile(){
  const dir = path.dirname(responsesFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(responsesFile)) fs.writeFileSync(responsesFile, '[]', 'utf8');
}

function readResponses(){
  ensureResponsesFile();
  try {
    const raw = fs.readFileSync(responsesFile, 'utf8') || '[]';
    return JSON.parse(raw);
  } catch (e) {
    console.error('readResponses error', e);
    return [];
  }
}

function writeResponses(arr){
  try {
    ensureResponsesFile();
    fs.writeFileSync(responsesFile, JSON.stringify(arr, null, 2), 'utf8');
  } catch (e) {
    console.error('writeResponses error', e);
  }
}

// aggregate stored responses into counts for each question in the required shape
function aggregateResponses(responses){
  const maps = {
    question2_improve: new Map(),
    question3_rate: new Map(),
    question4_well: new Map(),
    question5_cart: new Map()
  };

  responses.forEach(r => {
    // question2_improve (checkbox -> array or single)
    const q2 = r.question2_improve;
    if (Array.isArray(q2)) {
      q2.forEach(v => { if (v != null && v !== '') maps.question2_improve.set(v, (maps.question2_improve.get(v) || 0) + 1); });
    } else if (q2 != null && q2 !== '') {
      maps.question2_improve.set(q2, (maps.question2_improve.get(q2) || 0) + 1);
    }

    // question3_rate
    const q3 = r.question3_rate;
    if (q3 != null && q3 !== '') {
        maps.question3_rate.set(q3, (maps.question3_rate.get(q3) || 0) + 1);
    }

    // question4_well (checkbox)
    const q4 = r.question4_well;
    if (Array.isArray(q4)) {
      q4.forEach(v => { 
        if (v != null && v !== '') {
            maps.question4_well.set(v, (maps.question4_well.get(v) || 0) + 1); 
        }
        });
        
    } else if (q4 != null && q4 !== '') {
      maps.question4_well.set(q4, (maps.question4_well.get(q4) || 0) + 1);
    }

    // question5_cart
    const q5 = r.question5_cart;
    if (q5 != null && q5 !== '') {
        maps.question5_cart.set(q5, (maps.question5_cart.get(q5) || 0) + 1);
    }
  });

  function mapToArr(map, keyName){
    const arr = [];
    for (const [val, count] of map.entries()) {
        arr.push({ [keyName]: val, count });
    }
    // sort numeric labels ascending when possible; otherwise lexicographically
    arr.sort((a,b) => {
      const va = Object.values(a)[0];
      const vb = Object.values(b)[0];
      const na = Number(va);
      const nb = Number(vb);
      if (!isNaN(na) && !isNaN(nb)) return na - nb;
      return String(va).localeCompare(String(vb));
    });
    return arr;
  }

  return [
    mapToArr(maps.question2_improve, 'question2_improve'),
    mapToArr(maps.question3_rate, 'question3_rate'),
    mapToArr(maps.question4_well, 'question4_well'),
    mapToArr(maps.question5_cart, 'question5_cart')
  ];
}

// This is the controler per se, with the get/post
module.exports = function(app){
    // enable JSON +urlencoded parsing for API endpoints
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // when a user goes to localhost:3000/niceSurvey
    // serve a static html (the survey itself to fill in)
    app.get('/niceSurvey', function(req, res){
        res.sendFile(path.join(__dirname,'views', 'niceSurvey.html'));
    });

    // when a user types SUBMIT in localhost:3000/niceSurvey 
    // the action.js code will POST, and what is sent in the POST
    // will be recuperated here, parsed and used to update the data files
    app.post('/niceSurvey', urlencodedParser, function(req, res){
        console.log(req.body);
        var json = req.body || {};
        console.log('/niceSurvey form submitted:', json);
        const countableKeys = new Set([
          "question2_improve",   
          "question3_rate",      
          "question4_well",      
          "question5_cart"       
        ]);
        for (var key in json){
            // in the case of checkboxes, the user might check more than one
            // skip text inputs 
            if (!countableKeys.has(key)) continue;

            if (Array.isArray(json[key])){
                for (var item in json[key]){
                    combineCounts(key, json[key][item]);
                }
            }
            else {
                combineCounts(key, json[key]);
            }
        }
        try {
           const payload = {
               question2_improve: json.question2_improve,
               question3_rate: json.question3_rate,
               question4_well: json.question4_well,
               question5_cart: json.question5_cart
           };
           const all = readResponses();
           all.push(payload);
          writeResponses(all);
        } catch (e) {
           console.error('Error saving survey response to surveyResponses.json', e);
        }
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        res.sendFile(path.join(__dirname,'views', 'niceSurvey.html'));
    });
    app.post('/api/survey', function(req, res){
    const body = req.body || {};
    const payload = {
      question2_improve: body.question2_improve,
      question3_rate: body.question3_rate,
      question4_well: body.question4_well,
      question5_cart: body.question5_cart
    };
    try {
      const all = readResponses();
      all.push(payload);
      writeResponses(all);
      return res.status(201).json({ message: 'Saved', response: payload });
    } catch (e) {
      console.error('POST /api/survey error', e);
      return res.status(500).json({ error: 'Unable to save' });
    }
  });

  // GET /api/survey - return all saved responses
  app.get('/api/survey', function(req, res){
    const all = readResponses();
    res.json(all);
  });

  // GET /api/survey/results - aggregated counts in the format expected by the EJS view
  app.get('/api/survey/results', function(req, res){
    const all = readResponses();
    const aggregated = aggregateResponses(all);
    res.json({ results: aggregated });
  });
  app.get('/analysis', function(req, res){
    const all = readResponses();
    const aggregated = aggregateResponses(all);
    // prefer `analysis.ejs` if you created it; otherwise `showResults.ejs` (existing)
    const analysisViewPath = path.join(__dirname, 'views', 'analysis.ejs');
    const viewName = fs.existsSync(analysisViewPath) ? 'analysis' : 'showResults';
    res.render(viewName, { results: aggregated });
  });


    

};
