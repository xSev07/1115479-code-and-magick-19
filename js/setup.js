'use strict';

var WIZARDS_COUNT = 4;
var userDialog = document.querySelector('.setup');

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
  'rgb (101, 137, 164)',
  'rgb (241, 43, 107)',
  'rgb (146, 100, 161)',
  'rgb (56, 159, 117)',
  'rgb (215, 210, 55)',
  'rgb (0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var similarWizards = [];

for (var i = 0; i < WIZARDS_COUNT; i++) {
  similarWizards.push(createSimilarWizard());
}

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

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < WIZARDS_COUNT; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var wizardName = wizardElement.querySelector('.setup-similar-label');
  wizardName.textContent = '123';
  similarListElement.appendChild(wizardElement);
}

userDialog.classList.remove('hidden');
