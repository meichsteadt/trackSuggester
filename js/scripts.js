//=========================== Backend ======================================================
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
  console.log(css, ruby, cSharp);
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
}





//=========================== Frontend ==========================================
$(function() {
  $('#quiz form').submit(function(event) {
    var project = $('input:radio[name="project"]:checked').val();
    var fun = $('input:radio[name="fun"]:checked').val();
    var simple = $('input:radio[name="simple"]:checked').val();
    var job = $('input:radio[name="job"]:checked').val();
    var shot = $('input:radio[name="shot"]:checked').val();
    var travel = $('input:radio[name="travel"]:checked').val();
    var power = $('input:radio[name="power"]:checked').val();
    var arr = [project, fun, simple, job, shot, travel, power];

    console.log(result(arr));
    event.preventDefault();
  });
})
