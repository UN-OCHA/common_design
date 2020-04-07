(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdSearchInline = {
    attach: function (context, settings) {

      var searchButton = context.querySelector('.cd-search--inline__btn');
      var searchInput = context.querySelector('.cd-search--inline__input');

      function focusInput() {
        searchInput.focus();
      }

      if (searchButton) {
        searchButton.addEventListener('click', focusInput);
      }
    }
  };
})(Drupal);
