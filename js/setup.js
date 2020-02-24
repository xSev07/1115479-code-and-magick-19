'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var similarListElement = document.querySelector('.setup-similar-list');

  similarListElement.appendChild(window.similarWizards.createSimilarWizardsFragment(WIZARDS_COUNT));
  window.dialog.addDialogEvents(setup, setupOpen, setupClose);
  window.dragAndDrop.addDrag(setupDialogElement, dialogHandler);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
