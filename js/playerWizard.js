'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColorInput = setup.querySelector('input[name="coat-color"]');
  var eyesColorInput = setup.querySelector('input[name="eyes-color"]');
  var fireballColorInput = setup.querySelector('input[name="fireball-color"]');

  function setWizardCoatColor() {
    var color = window.color.generateColor('coat');
    wizardCoat.style.fill = color;
    coatColorInput.value = color;
  }

  function setWizardEyesColor() {
    var color = window.color.generateColor('eyes');
    wizardEyes.style.fill = color;
    eyesColorInput.value = color;
  }

  function setWizardFireballColor() {
    var color = window.color.generateColor('fireball');
    wizardFireball.style.background = color;
    fireballColorInput.value = color;
  }

  // function setColor(element) {
  //   //этот вариант ломается, если будет больше одного класса
  //   //можно сделать через if и проверять есть ли класс,
  //   //но тогда надо ещё заморочки с svg. В общем-то, как-то слишком переусложнено
  //   var color;
  //   //выглядит как-то криво
  //   // var isDivElement = element.tagName.toLowerCase() === 'div' ? true : false;
  //
  //   //а это, насколько помню, ты говорила, что нарушает дополнительный критерий
  //   var isDivElement = element.tagName.toLowerCase() === 'div';
  //   var checkedClass = isDivElement ? element.className : element.className.baseVal;
  //
  //   switch (checkedClass) {
  //     case 'wizard-coat':
  //       color = window.color.generateColor('coat');
  //       coatColorInput.value = color;
  //       break;
  //     case 'wizard-eyes':
  //       color = window.color.generateColor('eyes');
  //       eyesColorInput.value = color;
  //       break;
  //     case 'setup-fireball-wrap':
  //       color = window.color.generateColor('fireball');
  //       fireballColorInput.value = color;
  //       break;
  //   }
  //   if (isDivElement) {
  //     element.style.backgroundColor = color;
  //   } else {
  //     element.style.fill = color;
  //   }
  // }

  wizardCoat.addEventListener('click', function () {
    setWizardCoatColor();
    // setColor(wizardCoat);
  });

  wizardEyes.addEventListener('click', function () {
    setWizardEyesColor();
    // setColor(wizardEyes);
  });

  wizardFireball.addEventListener('click', function () {
    setWizardFireballColor();
    // setColor(wizardFireball);
  });
})();
