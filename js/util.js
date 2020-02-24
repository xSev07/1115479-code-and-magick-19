'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var TAG_INPUT = 'INPUT';

  function isEscEvent(evt, action) {
    if (evt.key === ESC_KEY & evt.target.tagName !== TAG_INPUT) {
      action();
    }
  }

  function isEnterEvent(evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  }

  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (+max - +min) + +min);
  }

  function getArrayRandomElement(array) {
    var randomIndex = getRandomNumberInRange(0, array.length);
    return array[randomIndex];
  }

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomNumberInRange: getRandomNumberInRange,
    getArrayRandomElement: getArrayRandomElement
  };
})();
