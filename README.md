# Amazon Experience Survey

This project is a web survey application built with Node.js and Express.  
It allows users to complete a survey about their experience with the Amazon website 
and view the results on an analysis page.

The survey responses are stored in JSON files on the server.

## Requirements

- Node.js installed
- npm (comes with Node.js)

## Installation

1. Clone the repository:
      git clone <repository-url>
2. Navigate to the project folder:
      cd SEG3125-group3-lab6
3. Install the dependencies:
      npm install
## Running the application

4.Start the server:
      node server.js
The server will run on:  "http://localhost:3000"

## Using the application

5.Open the survey page in your browser:
http://localhost:3000/niceSurvey

6.Fill out the survey and submit your responses.
    by clicking on Submit button you will be directed to the analysis view 
    also, To view the survey results, open:
    http://localhost:3000/analysis

## Project structure
.
├── app.js
├── data
│   ├── question2_improve.json
│   ├── question3_rate.json
│   ├── question4_well.json
│   └── question5_cart.json
├── node_modules
│   ├── accepts
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── ansi-styles
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── array-flatten
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── array-flatten.js
│   │   └── package.json
│   ├── async
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bower.json
│   │   ├── component.json
│   │   ├── lib
│   │   │   └── async.js
│   │   ├── package.json
│   │   └── support
│   │       └── sync-package-managers.js
│   ├── balanced-match
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── body-parser
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── read.js
│   │   │   └── types
│   │   │       ├── json.js
│   │   │       ├── raw.js
│   │   │       ├── text.js
│   │   │       └── urlencoded.js
│   │   └── package.json
│   ├── brace-expansion
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── bytes
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── chalk
│   │   ├── index.js
│   │   ├── index.js.flow
│   │   ├── license
│   │   ├── package.json
│   │   ├── readme.md
│   │   ├── templates.js
│   │   └── types
│   │       └── index.d.ts
│   ├── color-convert
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── conversions.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── route.js
│   ├── color-name
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test.js
│   ├── concat-map
│   │   ├── LICENSE
│   │   ├── README.markdown
│   │   ├── example
│   │   │   └── map.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── map.js
│   ├── content-disposition
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── content-type
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── cookie
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── cookie-signature
│   │   ├── History.md
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── debug
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── Makefile
│   │   ├── README.md
│   │   ├── component.json
│   │   ├── karma.conf.js
│   │   ├── node.js
│   │   ├── package.json
│   │   └── src
│   │       ├── browser.js
│   │       ├── debug.js
│   │       ├── index.js
│   │       ├── inspector-log.js
│   │       └── node.js
│   ├── depd
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── browser
│   │   │   │   └── index.js
│   │   │   └── compat
│   │   │       ├── callsite-tostring.js
│   │   │       ├── event-listener-count.js
│   │   │       └── index.js
│   │   └── package.json
│   ├── destroy
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── ee-first
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── ejs
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── cli.js
│   │   ├── ejs.js
│   │   ├── ejs.min.js
│   │   ├── jakefile.js
│   │   ├── lib
│   │   │   ├── ejs.js
│   │   │   └── utils.js
│   │   ├── package.json
│   │   ├── postinstall.js
│   │   └── usage.txt
│   ├── encodeurl
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── escape-html
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── escape-string-regexp
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── etag
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── express
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── application.js
│   │   │   ├── express.js
│   │   │   ├── middleware
│   │   │   │   ├── init.js
│   │   │   │   └── query.js
│   │   │   ├── request.js
│   │   │   ├── response.js
│   │   │   ├── router
│   │   │   │   ├── index.js
│   │   │   │   ├── layer.js
│   │   │   │   └── route.js
│   │   │   ├── utils.js
│   │   │   └── view.js
│   │   └── package.json
│   ├── filelist
│   │   ├── Jakefile
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── finalhandler
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── forwarded
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── fresh
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── has-flag
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── http-errors
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── iconv-lite
│   │   ├── Changelog.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── encodings
│   │   │   ├── dbcs-codec.js
│   │   │   ├── dbcs-data.js
│   │   │   ├── index.js
│   │   │   ├── internal.js
│   │   │   ├── sbcs-codec.js
│   │   │   ├── sbcs-data-generated.js
│   │   │   ├── sbcs-data.js
│   │   │   ├── tables
│   │   │   │   ├── big5-added.json
│   │   │   │   ├── cp936.json
│   │   │   │   ├── cp949.json
│   │   │   │   ├── cp950.json
│   │   │   │   ├── eucjp.json
│   │   │   │   ├── gb18030-ranges.json
│   │   │   │   ├── gbk-added.json
│   │   │   │   └── shiftjis.json
│   │   │   ├── utf16.js
│   │   │   └── utf7.js
│   │   ├── lib
│   │   │   ├── bom-handling.js
│   │   │   ├── extend-node.js
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   └── streams.js
│   │   └── package.json
│   ├── inherits
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── inherits.js
│   │   ├── inherits_browser.js
│   │   └── package.json
│   ├── ipaddr.js
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── ipaddr.min.js
│   │   ├── lib
│   │   │   ├── ipaddr.js
│   │   │   └── ipaddr.js.d.ts
│   │   └── package.json
│   ├── jake
│   │   ├── Makefile
│   │   ├── README.md
│   │   ├── bin
│   │   │   ├── bash_completion.sh
│   │   │   └── cli.js
│   │   ├── jakefile.js
│   │   ├── lib
│   │   │   ├── api.js
│   │   │   ├── jake.js
│   │   │   ├── loader.js
│   │   │   ├── namespace.js
│   │   │   ├── package_task.js
│   │   │   ├── parseargs.js
│   │   │   ├── program.js
│   │   │   ├── publish_task.js
│   │   │   ├── rule.js
│   │   │   ├── task
│   │   │   │   ├── directory_task.js
│   │   │   │   ├── file_task.js
│   │   │   │   ├── index.js
│   │   │   │   └── task.js
│   │   │   ├── test_task.js
│   │   │   └── utils
│   │   │       ├── file.js
│   │   │       ├── index.js
│   │   │       └── logger.js
│   │   ├── package.json
│   │   ├── test
│   │   │   ├── integration
│   │   │   │   ├── concurrent.js
│   │   │   │   ├── file.js
│   │   │   │   ├── file_task.js
│   │   │   │   ├── helpers.js
│   │   │   │   ├── jakefile.js
│   │   │   │   ├── jakelib
│   │   │   │   │   ├── concurrent.jake.js
│   │   │   │   │   ├── publish.jake.js
│   │   │   │   │   ├── required_module.jake.js
│   │   │   │   │   └── rule.jake.js
│   │   │   │   ├── publish_task.js
│   │   │   │   ├── rule.js
│   │   │   │   ├── selfdep.js
│   │   │   │   └── task_base.js
│   │   │   └── unit
│   │   │       ├── jakefile.js
│   │   │       ├── namespace.js
│   │   │       └── parseargs.js
│   │   └── usage.txt
│   ├── media-typer
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── merge-descriptors
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── methods
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── mime
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── cli.js
│   │   ├── mime.js
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── build.js
│   │   │   └── test.js
│   │   └── types.json
│   ├── mime-db
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── db.json
│   │   ├── index.js
│   │   └── package.json
│   ├── mime-types
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── minimatch
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── minimatch.js
│   │   └── package.json
│   ├── ms
│   │   ├── index.js
│   │   ├── license.md
│   │   ├── package.json
│   │   └── readme.md
│   ├── negotiator
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── charset.js
│   │   │   ├── encoding.js
│   │   │   ├── language.js
│   │   │   └── mediaType.js
│   │   └── package.json
│   ├── on-finished
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── parseurl
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── path-to-regexp
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── proxy-addr
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── qs
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   └── qs.js
│   │   ├── lib
│   │   │   ├── formats.js
│   │   │   ├── index.js
│   │   │   ├── parse.js
│   │   │   ├── stringify.js
│   │   │   └── utils.js
│   │   ├── package.json
│   │   └── test
│   │       ├── index.js
│   │       ├── parse.js
│   │       ├── stringify.js
│   │       └── utils.js
│   ├── range-parser
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── raw-body
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── safe-buffer
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── safer-buffer
│   │   ├── LICENSE
│   │   ├── Porting-Buffer.md
│   │   ├── Readme.md
│   │   ├── dangerous.js
│   │   ├── package.json
│   │   ├── safer.js
│   │   └── tests.js
│   ├── send
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── node_modules
│   │   │   └── ms
│   │   │       ├── index.js
│   │   │       ├── license.md
│   │   │       ├── package.json
│   │   │       └── readme.md
│   │   └── package.json
│   ├── serve-static
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── setprototypeof
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── statuses
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── codes.json
│   │   ├── index.js
│   │   └── package.json
│   ├── supports-color
│   │   ├── browser.js
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── toidentifier
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── type-is
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── unpipe
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── utils-merge
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   └── vary
│       ├── HISTORY.md
│       ├── LICENSE
│       ├── README.md
│       ├── index.js
│       └── package.json
├── package-lock.json
├── package.json
├── public
│   └── assets
│       ├── action.js
│       ├── img
│       │   ├── amazon.png
│       │   ├── cart.png
│       │   ├── logo.png
│       │   ├── notepad.jpg
│       │   └── sign-in.png
│       └── style.css
├── server.js
├── surveyController.js
└── views
    ├── niceSurvey.html
    └── showResults.ejs
    
## Data storage

Survey responses are stored in JSON files located in the `data` folder.  
These files are updated automatically when users submit the survey.
the files:
question2_improve.json
question3_rate.json
question4_well.json
question5_cart.json

we used : 
- Node.js
- Express
- Bootstrap
- JavaScript
- JSON (for data storage)

  



