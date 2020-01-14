(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdSearch = {
    attach: function (context, settings) {

      var searchButton = context.querySelector('.cd-search__btn');
      var searchInput = context.querySelector('.cd-search__input');

      function focusInput() {
        searchInput.focus();
      }

      if (searchButton) {
        searchButton.addEventListener('click', focusInput);
      }
    }
  };
})(Drupal);
