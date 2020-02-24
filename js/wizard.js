'use strict';

(function () {
  var WIZARDS_COUNT = 4;
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

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColorInput = setup.querySelector('input[name="coat-color"]');
  var eyesColorInput = setup.querySelector('input[name="eyes-color"]');
  var fireballColorInput = setup.querySelector('input[name="fireball-color"]');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');

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

  function setWizardCoatColor() {
    var color = generateColor('coat');
    wizardCoat.style.fill = color;
    coatColorInput.value = color;
  }

  function setWizardEyesColor() {
    var color = generateColor('eyes');
    wizardEyes.style.fill = color;
    eyesColorInput.value = color;
  }

  function setWizardFireballColor() {
    var color = generateColor('fireball');
    wizardFireball.style.background = color;
    fireballColorInput.value = color;
  }

  function generateName() {
    return window.util.getArrayRandomElement(FIRST_NAMES) + ' ' + window.util.getArrayRandomElement(SECOND_NAMES);
  }

  function createSimilarWizard() {
    return {
      name: generateName(),
      coatColor: generateColor('coat'),
      eyesColor: generateColor('eyes')
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

  wizardCoat.addEventListener('click', function () {
    setWizardCoatColor();
  });

  wizardEyes.addEventListener('click', function () {
    setWizardEyesColor();
  });

  wizardFireball.addEventListener('click', function () {
    setWizardFireballColor();
  });

  similarListElement.appendChild(createSimilarWizardsFragment(WIZARDS_COUNT));
})();
