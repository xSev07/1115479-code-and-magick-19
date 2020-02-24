'use strict';

(function () {
  function addOpenCloseKeyEvents(element, elementOpen, elementClose) {
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

  function addDrag(element, elementHandler) {
    elementHandler.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };
      var dragged = false;

      function onMouseMove(moveEvt) {
        moveEvt.preventDefault();
        dragged = true;

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        element.style.top = (element.offsetTop - shift.y) + 'px';
        element.style.left = (element.offsetLeft - shift.x) + 'px';
      }

      function onMouseUp(upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        function onClickPreventDefault(clickEvt) {
          clickEvt.preventDefault();
          elementHandler.removeEventListener('click', onClickPreventDefault);
        }

        if (dragged) {
          elementHandler.addEventListener('click', onClickPreventDefault);
        }
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }

  window.dialog = {
    addOpenCloseKeyEvents: addOpenCloseKeyEvents,
    addDrag: addDrag
  };
})();
