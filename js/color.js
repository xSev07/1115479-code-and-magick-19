'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  function generateCoatColor() {
    return window.util.getArrayRandomElement(COAT_COLORS);
  }

  function generateEyesColor() {
    return window.util.getArrayRandomElement(EYES_COLORS);
  }

  function generateFireballColor() {
    return window.util.getArrayRandomElement(FIREBALL_COLORS);
  }

  function generateColor(elementName) {
    var color;
    switch (elementName) {
      case 'eyes':
        color = generateEyesColor();
        break;
      case 'coat':
        color = generateCoatColor();
        break;
      case 'fireball':
        color = generateFireballColor();
        break;
    }
    return color;
  }

  window.color = {
    generateColor: generateColor
  };
})();
