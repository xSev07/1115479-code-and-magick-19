'use strict';

(function () {
  var ERROR_SHORT_NAME = 'Имя должно состоять минимум из 2-х символов';
  var ERROR_LONG_NAME = 'Имя не должно превышать 25-ти символов';
  var ERROR_EMPTY_NAME = 'Обязательное поле';
  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity(ERROR_SHORT_NAME);
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity(ERROR_LONG_NAME);
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity(ERROR_EMPTY_NAME);
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();
