// Multi-page survey navigation and submission
$(document).ready(function(){
  var pages = $('.survey-page');
  var current = 0;

  function showPage(index){
    pages.hide();
    $(pages.get(index)).show();
    // toggle back button
    if (index === 0) { $('#backBtn').hide(); } else { $('#backBtn').show(); }
    // toggle next/submit
    if (index === pages.length - 1){
      $('#nextBtn').hide();
      $('#submitBtn').show();
    } else {
      $('#nextBtn').show();
      $('#submitBtn').hide();
    }
  }

  showPage(current);

  $('#nextBtn').on('click', function(){
    if (current < pages.length - 1){
      current += 1;
      showPage(current);
    }
  });

  $('#backBtn').on('click', function(){
    if (current > 0){
      current -= 1;
      showPage(current);
    }
  });

  // final submit handler
  $('#surveyForm').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    $.ajax({
      type: 'POST',
      url: '/niceSurvey',
      data: form.serializeArray(),
      success: function(data){
        // show thank you and redirect to analysis
        $("#submitBtn").css("background-color", "red");
        $("#submitBtn").prop("disabled", true);
        $("#submitBtn").text("Thank you!");
        window.location.href= "/analysis";
      },
      error: function(){
        alert('Submission failed. Please try again.');
      }
    });
    return false;
  });
});
