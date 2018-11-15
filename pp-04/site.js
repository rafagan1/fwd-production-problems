'use strict';
// Return if no JavaScript
(function() {
  var doorbell, bell;
  var mybell;
  var mynav;
  var html;
  var dbutton;

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
  });
})();
