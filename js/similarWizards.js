'use strict';

(function () {
  var FIRST_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var SECOND_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  function generateName() {
    return window.util.getArrayRandomElement(FIRST_NAMES) + ' ' + window.util.getArrayRandomElement(SECOND_NAMES);
  }

  function createSimilarWizard() {
    return {
      name: generateName(),
      coatColor: window.color.generateColor('coat'),
      eyesColor: window.color.generateColor('eyes')
    };
  }

  function createWizards(count) {
    var wizards = [];
    for (var i = 0; i < count; i++) {
      wizards.push(createSimilarWizard());
    }
    return wizards;
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  function createSimilarWizardsFragment(wizardsCount) {
    var similarWizards = createWizards(wizardsCount);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < similarWizards.length; i++) {
      fragment.appendChild(renderWizard(similarWizards[i]));
    }
    return fragment;
  }

  window.similarWizards = {
    createSimilarWizardsFragment: createSimilarWizardsFragment
  };
})();
