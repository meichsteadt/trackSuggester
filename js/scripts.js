//=========================== Global Variables ==============================================
var img, result, append = "";
var rubyImg = '<img class="codeImg" src="img/ruby.png" alt="ruby picture">';
var cSharpImg = '<img class="codeImg" src="img/cSharp.png" alt="c# picture">';
var cssImg = '<img class="codeImg" src="img/css.png" alt="css picture">';

//=========================== Back end ======================================================
function scoreQuiz(arr) {
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
    result = "It's dead even.";
    img = rubyImg + cSharpImg + cssImg;
    append = "Looks like this quiz didn't help much."
  }
  else if(css > ruby && css > cSharp) {
    result = "You got CSS";
    img = cssImg;
    append = "";
  }
  else if (ruby > cSharp && ruby > css) {
    result = "You got Ruby";
    img = rubyImg;
    append = "";
  }
  else if(cSharp > ruby && cSharp > css){
    result = "You got C#";
    img = cSharpImg;
  }
  else if(css === ruby) {
    result = "It's tied between CSS and Ruby";
    img = cssImg + rubyImg;
  }
  else if(css === cSharp) {
    result = "It's tied between CSS and C#";
    img = cssImg + cSharpImg;
    append = "";
  }
  else if(ruby === cSharp) {
    result = "It's tied between Ruby and C#";
    img = rubyImg + cSharpImg;
    append = "";
  }
}

function img(arr) {
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
    return "It's dead even. Looks like this quiz didn't help much.";
    img = rubyImg;
  }
  else if(css > ruby && css > cSharp) {
    return "You got CSS";
  }
  else if (ruby > cSharp && ruby > css) {
    return "You got Ruby";
  }
  else if(cSharp > ruby && cSharp > css){
    return "You got C#";
  }
  else if(css === ruby) {
    return "It's tied between CSS and Ruby";
  }
  else if(css === cSharp) {
    return "It's tied between CSS and C#";
  }
  else if(ruby === cSharp) {
    return "It's tied between Ruby and C#";
  }
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
      scoreQuiz(answers);
      $('#result').append('<h1>' + result + '</h1>');
      $('#result').append('<h4>' + append + '</h4>')
      $('#result').append(img);
      $('#result').show();
      $('#quiz').hide();
    }
    event.preventDefault();
  });

  $('#lame').click(function() {
    $('.lame').show();
    $('#lame').attr('disabled', 'true');

  });

  $('h1').click(function() {
    $('#quiz').hide();
    //$('#result').append('<h1>You should take ' + result(answers) +'</h1>');
    $('#result').append(cssImg);
    $('#result').show();
  });
});
