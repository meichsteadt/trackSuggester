//=========================== Global Variables ==============================================
var img, result, append = "";
var rubyImg = '<a href="http:\/\/www.epicodus.com\/ruby"><img class="codeImg" src="img/ruby.png" alt="ruby picture"></a>';
var cSharpImg = '<a href="http:\/\/www.epicodus.com\/c-sharp"><img class="codeImg" src="img/cSharp.png" alt="c# picture"></a>';
var cssImg = '<a href="http:\/\/www.epicodus.com\/css"><img class="codeImg" src="img/css.png" alt="css picture"></a>';
var railsImg = '<a href="http:\/\/www.epicodus.com\/rails"><img class="codeImg" src="img/rails.png" alt="ruby picture"></a>';
var designImg = '<a href="http:\/\/www.epicodus.com\/design"><img class="codeImg" src="img/design.png" alt="ruby picture"></a>';
var netImg = '<a href="http:\/\/www.epicodus.com\/net"><img class="codeImg" src="img/net.png" alt="ruby picture"></a>';

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
    result = "It's dead even";
    img = rubyImg + railsImg + cSharpImg + netImg + cssImg + designImg;
    append = "Looks like this quiz didn't help much."
  }
  else if(css > ruby && css > cSharp) {
    result = 'You got <a href="http:\/\/www.epicodus.com\/css">CSS</a> and <a href="http:\/\/www.epicodus.com\/design">Design</a>';
    img = cssImg + designImg;
    append = "Front-end developers spend their time making things look and work well, obsessing over layouts, navigation, colors, and design. If this type of work appeals to you, your best bet is to take CSS and Design classes at Epicodus.";
  }
  else if (ruby > cSharp && ruby > css) {
    result = 'You got <a href="http:\/\/www.epicodus.com\/ruby">Ruby</a> and <a href="http:\/\/www.epicodus.com\/rails">Rails</a>';
    img = rubyImg + railsImg;
    append = "Ruby is a favorite language of developers building interactive web applications. If an app involves users creating accounts, entering information, and interacting with dynamic content, there's a good chance it is built with Ruby. It's most popular with startups and smaller companies who are looking to build their product quickly.";
  }
  else if(cSharp > ruby && cSharp > css){
    result = 'You got <a href="http:\/\/www.epicodus.com\/c-sharp">C#</a> and <a href="http:\/\/www.epicodus.com\/net">.Net</a>';
    img = cSharpImg + netImg;
    append = "C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. If you like the idea of working for a larger company on business software, C# is a great choice.";
  }
  else if(css === ruby) {
    result = 'It\'s tied between <a href="http:\/\/www.epicodus.com\/css">CSS</a> and <a href="http:\/\/www.epicodus.com\/ruby">Ruby</a>';
    img = cssImg + rubyImg;
    append = "Front-end or back-end? That's what you really need to decide here. Do you prefer the subjectivity that CSS and Design can provide, or having a clear result that back-end development needs to achieve?";
  }
  else if(css === cSharp) {
    result = 'It\'s tied between <a href="http:\/\/www.epicodus.com\/css">CSS</a> and <a href="http:\/\/www.epicodus.com\/c-sharp">C#</a>';
    img = cssImg + cSharpImg;
    append = "What a predicament. Looks like you've got an internal struggle going on. On one hand, you want to creative and daring. You want to make beautiful designs that capture people's attention. On the other hand, you crave structure and framework and want that piece of you to be reflected in your coding language. Hmm. All this quiz did was weed out Ruby.";
  }
  else if(ruby === cSharp) {
    result = 'It\'s tied between <a href="http:\/\/www.epicodus.com\/ruby">Ruby</a> and <a href="http:\/\/www.epicodus.com\/c-sharp">C#</a>';
    img = rubyImg + cSharpImg;
    append = "Stop what you're doing, close your eyes(not yet), and think \"What kind of company do I see myself working at?\" If it's a smaller company where everyone is responsible for many thing Ruby might be your thing. If it's a bigger, established company where you do one role C# could be for you.";
  }
}

function checkInput(arr) {
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
      if(!$('input:radio[name="' + questions[i] + '"]:checked').val()) {
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
      $('#result').append('<h2>' + result + '</h2>');
      $('#result').append('<h4>' + append + '</h4>');
      $('#result').append(img);
      $('#result').fadeIn();
      $('#quiz').hide();
    }

    event.preventDefault();
  });

  $('#lame').click(function() {
    $('.lame').fadeIn();
    $('#lame').attr('disabled', 'true');
  });
});
