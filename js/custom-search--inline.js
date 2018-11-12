/**
 * @file
 * Bootstrap dropdown on search and inline search.
 */

(function ($, Drupal) {
  Drupal.behaviors.cdSearchInline = {
    attach: function (context, settings) {

      // Apply focus to input when dropdown is shown, remove when closed.
      $('.cd-search--inline').on('shown.bs.dropdown', function () {
        $(this).find('.cd-search--inline__input').focus();
      }).on('hidden.bs.dropdown', function () {
        $(this).find('.cd-search--inline__input').blur();
      });

      // Add class on submit button when input has focus, remove on blur.
      $('.cd-search--inline .cd-search--inline__input').on('focus', function(e) {
        $(this).parents('.cd-search--inline__form').find('.cd-search--inline__submit').addClass('js-has-focus');
        $(this).parents('.cd-search--inline__form').find('form').addClass('js-has-focus');
      }).on('blur', function(e) {
        $(this).parents('.cd-search--inline__form').find('.cd-search--inline__submit').removeClass('js-has-focus');
        $(this).parents('.cd-search--inline__form').find('form').removeClass('js-has-focus');
      });

    }
  };
}(jQuery, Drupal));
