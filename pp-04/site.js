'use strict';
// Return if no JavaScript
(function() {
  var doorbell, bell, mybell, mynav, html, dbutton, txt;

  if (typeof document.querySelector === 'undefined') {
    return;
  }

  html = document.querySelector('html');
  html.classList.remove('nojs');
  html.classList.add('js');

  mybell = document.querySelector('#ring');
  mynav = document.querySelector('.mynav');

  function ringDoorbell() {
    console.log('Click Event');
    mynav.classList.toggle('visible');
    doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

  document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM loaded');
    dbutton = document.createElement('button');
    dbutton.setAttribute('id', 'door-button');
    dbutton.textContent = 'Press to Ring';

    mybell.insertBefore(dbutton, mynav);
    bell = document.getElementById("door-button");
    bell.addEventListener('click', ringDoorbell);

    txt = document.querySelector('#other');
    txt.value = 'Presss Enter or d to ring';
    txt.addEventListener("keydown", function(e) {
      if (e.keyCode === 13 || e.keyCode === 68) {
        ringDoorbell();
      }
    });
  });
})();
