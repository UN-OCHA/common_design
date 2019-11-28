(function (Drupal) {
  Drupal.behaviors.cdSearch = {
    attach: function (context, settings) {

      const searchButton = context.querySelector('.cd-search__btn');
      const searchInput = context.querySelector('.cd-search__input');

      function focusInput() {
        searchInput.focus();
      }

      if (searchButton) {
        searchButton.addEventListener('click', focusInput);
      }
    }
  };
}(Drupal));
