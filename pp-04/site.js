'use strict';
// Return if no JavaScript
(function(){
  if (typeof document.querySelector === 'undefined') {
    return;
  }
});
function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
