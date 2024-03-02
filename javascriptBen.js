
window.onload = function () {typeWriter()};

var i = 0;
var txt = 'Hello world! This is Ben Taylor, a Toronto-based technology professional. '; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type-writer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
$(document).ready(function () {
    $('i').css('display', 'none');
    setTimeout(function(){
        function blink_text() {
            $('i').fadeIn(1500);
            $('i').fadeOut(1200);
        }
        setInterval(blink_text, 3000);
    }, 4500); 

});

