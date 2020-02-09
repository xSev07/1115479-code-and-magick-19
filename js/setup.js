'use strict';

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
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var TAG_INPUT = 'INPUT';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function createSimilarWizard() {
  return {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyesColor()
  };
}

function generateName() {
  return getArrayRandomElement(FIRST_NAMES) + ' ' + getArrayRandomElement(SECOND_NAMES);
}

function generateCoatColor() {
  return getArrayRandomElement(COAT_COLORS);
}

function generateEyesColor() {
  return getArrayRandomElement(EYES_COLORS);
}

function generateFireballColor() {
  return getArrayRandomElement(FIREBALL_COLORS);
}

function getRandomNumberInRange(min, max) {
  return Math.round(Math.random() * (+max - +min) + +min);
}

function getArrayRandomElement(array) {
  var randomIndex = getRandomNumberInRange(0, array.length);
  return array[randomIndex];
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

function createWizards(count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push(createSimilarWizard());
  }
  return wizards;
}

function createSimilarWizardsFragment(wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
}

function onPopupEscPress(evt) {
  if (evt.key === ESC_KEY & evt.target.tagName !== TAG_INPUT) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function changeColor(element) {
  switch (element) {
    case 'coat':
      wizardCoat.style.fill = generateCoatColor();
      break;
    case 'eyes':
      wizardEyes.style.fill = generateEyesColor();
      break;
    case 'fireball':
      wizardFireball.style.background = generateFireballColor();
      break;
  }
}

setupOpen.addEventListener('click', function () {
  openPopup(setup);
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  changeColor('coat');
});

wizardEyes.addEventListener('click', function () {
  changeColor('eyes');
});

wizardFireball.addEventListener('click', function () {
  changeColor('fireball');
});

var similarWizards = createWizards(WIZARDS_COUNT);

similarListElement.appendChild(createSimilarWizardsFragment(similarWizards));
similarWizards = [];

document.querySelector('.setup-similar').classList.remove('hidden');
