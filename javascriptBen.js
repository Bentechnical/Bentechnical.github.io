
window.onload = function () {typeWriter()};

var i = 0;
var txt = 'Hello world! This is Ben Taylor and I am making a website. '; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
    
  }
}
