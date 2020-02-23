'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');

  similarListElement.appendChild(window.similarWizards.createSimilarWizardsFragment(WIZARDS_COUNT));

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
