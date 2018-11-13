'use strict';
// Return if no JavaScript
(function(){
  if (typeof document.querySelector === 'undefined') {
    return;
  }
});
function ringDoorbell() {
  console.log('Click Event');
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
};
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  //  Check for id in html
  var bell = document.getElementById("ring-bell");

  // Call function to ring bell if id found
  bell.addEventListener('click', ringDoorbell);
});
