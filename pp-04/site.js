'use strict';
// Return if no JavaScript
(function(){
  var doorbell;
  var bell;
  if (typeof document.querySelector === 'undefined') {
    return;
  }
  // Declare function to ring door bell
  function ringDoorbell() {
    console.log('Click Event');
    doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Add button element to html
    document.querySelector('#ring').innerHTML =
     "<button id='door-button'>Ring Doorbell</button>";
    // Get button element and indicate to ring bell via
    // function call.
    bell = document.getElementById("door-button");
    bell.addEventListener('click', ringDoorbell);
  });
})();
