'use strict'
// Return if no JavaScript
(function() {
  var doorbell;
  var bell;
  if (typeof document.querySelector === 'undefined') {
    return;
  }

  function ringDoorbell() {
    console.log('Click Event');
    doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

  document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM loaded');
    // Add button element to html
    document.querySelector('#ring').innerHTML =
    "<button id='door-button'>Ring Doorbell</button>";
    bell = document.getElementById("door-button");
    bell.addEventListener('click', ringDoorbell);
  });
})();
