'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var dialogHandler = setup.querySelector('.upload');

  window.dialog.addOpenCloseKeyEvents(setup, setupOpen, setupClose);
  window.dialog.addDrag(setup, dialogHandler);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
