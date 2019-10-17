/**
 * @file
 * Bootstrap dropdown on search.
 */

(function ($, Drupal) {
  Drupal.behaviors.cdSearch = {
    attach: function (context, settings) {

      // Apply focus to input when dropdown is shown.
      $('.cd-search').on('shown.bs.dropdown', function () {
        $('.cd-search__input').focus();
      }).on('hidden.bs.dropdown', function () {
        $('.cd-search__input').blur();
      });

      $('.cd-search__input').on('focus', function (e) {
        $('.cd-search__submit').addClass('js-has-focus');
      }).on('blur', function (e) {
        $('.cd-search__submit').removeClass('js-has-focus');
      });

    }
  };
}(jQuery, Drupal));

