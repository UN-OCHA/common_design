/**
 * @file
 * Bootstrap dropdown on main menu.
 */

(function ($, Drupal) {
  Drupal.behaviors.cdMenu = {
    attach: function (context, settings) {
      $('.menu--main .menu-item--expanded > a', context).on('click', function (e) {
        $(this).parent().toggleClass('open');
        e.stopPropagation();
        e.preventDefault();
      });
    }
  };
}(jQuery, Drupal));
