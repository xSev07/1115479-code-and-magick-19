'use strict';

var WIZARDS_COUNT = 4;
var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var secondNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

function createSimilarWizard() {
  return {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyesColor()
  };
}

function generateName() {
  return getArrayRandomElement(firstNames) + ' ' + getArrayRandomElement(secondNames);
}

function generateCoatColor() {
  return getArrayRandomElement(coatColors);
}

function generateEyesColor() {
  return getArrayRandomElement(eyesColors);
}

function getArrayRandomElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
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

var similarWizards = createWizards(WIZARDS_COUNT);

similarListElement.appendChild(createSimilarWizardsFragment(similarWizards));
similarWizards = [];

document.querySelector('.setup-similar').classList.remove('hidden');
userDialog.classList.remove('hidden');
