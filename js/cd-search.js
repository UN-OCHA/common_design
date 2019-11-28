/**
 * @file
 * Bootstrap dropdown on search.
 */

(function (Drupal) {
  Drupal.behaviors.cdSearch = {
    attach: function (context, settings) {

      const searchButton = context.querySelector('.cd-search__btn');
      const searchInput = context.querySelector('.cd-search__input');
      const searchSubmit = context.querySelector('.cd-search__submit');

      function focusInput() {
        searchInput.focus();
        searchSubmit.classList.toggle('js-has-focus');
      }

      searchButton.addEventListener('click', focusInput);

    }
  };
}(Drupal));
