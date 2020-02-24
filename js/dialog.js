'use strict';

(function () {
  function addDialogEvents(element, elementOpen, elementClose) {
    function onPopupEscPress(evt) {
      window.util.isEscEvent(evt, closePopup);
    }

    function openPopup() {
      element.classList.remove('hidden');
      document.addEventListener('keydown', onPopupEscPress);
    }

    function closePopup() {
      element.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    }

    elementOpen.addEventListener('click', function () {
      openPopup(element);
    });

    elementOpen.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, openPopup);
    });

    elementClose.addEventListener('click', function () {
      closePopup();
    });

    elementClose.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, closePopup);
    });
  }

  window.dialog = {
    addDialogEvents: addDialogEvents
  };
})();
