/**
 * @file
 * Bootstrap dropdown on main menu.
 */

(function ($, Drupal) {
  Drupal.behaviors.cdMenu = {
    attach: function (context, settings) {
      $('.menu--main .menu-item--expanded > a', context).on('click', function (e) {

        $(this).parent().toggleClass('open');

        var menuItem = $( e.currentTarget );

        if (menuItem.attr( 'aria-expanded') === 'true') {
          $(this).attr( 'aria-expanded', 'false');
        } else {
          $(this).attr( 'aria-expanded', 'true');
        }

        e.stopPropagation();
        e.preventDefault();
      });
    }
  };
}(jQuery, Drupal));
