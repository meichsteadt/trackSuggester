//=========================== Back end ======================================================
function result(arr) {
  var cSharp = 0, css=0, ruby=0;
  for(var i=0;i<arr.length;i++) {
    if(arr[i] === "cSharp") {
      cSharp++;
    }
    else if(arr[i] === "ruby") {
      ruby++;
    }
    else if (arr[i] === "css") {
      css++;
    }
  }
  if(css === ruby && css === cSharp) {
    return "Ruby, C#, and CSS";
  }
  else if(css > ruby && css > cSharp) {
    return "CSS";
  }
  else if (ruby > cSharp && ruby > css) {
    return "Ruby";
  }
  else if(cSharp > ruby && cSharp > css){
    return "C#";
  }
  else if(css === ruby) {
    return "CSS and Ruby";
  }
  else if(css === cSharp) {
    return "CSS and C#";
  }
  else if(ruby === cSharp) {
    return "Ruby and C#";
  }
  console.log("css:" + css, 'ruby:' + ruby, 'c#:' + cSharp);
}

function checkInput(arr) {
  var blanks = [];
  for(var i=0;i<arr.length;i++) {
    if(!arr[i]) {
      return false;
    }
  }
  return true;
}

//=========================== Front end ==========================================
$(function() {
  $('#quiz form').submit(function(event) {
    var project = $('input:radio[name="project"]:checked').val();
    var fun = $('input:radio[name="fun"]:checked').val();
    var simple = $('input:radio[name="simple"]:checked').val();
    var job = $('input:radio[name="job"]:checked').val();
    var shot = $('input:radio[name="shot"]:checked').val();
    var travel = $('input:radio[name="travel"]:checked').val();
    var power = $('input:radio[name="power"]:checked').val();
    var answers = [project, fun, simple, job, shot, travel, power];
    var questions = ["project", "fun", "simple", "job", "shot", "travel", "power"];

    for(var i=0;i<questions.length;i++) {
      if(!$('input:radio[name="' + questions[i] + '"]:checked').val()){
        $('#'+questions[i]).addClass('has-error');
      }
      else {
        $('#'+ questions[i]).removeClass('has-error');
      }
      if($('#'+ questions[i]).hasClass('has-error')) {
        $('#'+ questions[i]).children('.glyphicon-remove').show();
      }
      else {
        $('#'+ questions[i]).children('.glyphicon-remove').hide();
      }
    };

    $('.try-again').hide();
    if(!checkInput(answers)) {
      $('.try-again').show();
    }
    else {
      $('#result').append('<h1>You should take ' + result(answers) +'</h1>');
      $('#result').show();
      $('#quiz').hide();
    }
    event.preventDefault();
  });

  $('#lame').click(function() {
    $('.lame').show();
    $('#lame').attr('disabled', 'true');
  });


})
