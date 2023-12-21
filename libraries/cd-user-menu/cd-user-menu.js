(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdUserMenu = {
    attach: function (context, settings) {
      // Update nested Drupal menus in the header.
      Drupal.behaviors.cdDropdown.updateDrupalTogglableMenus('.cd-global-header__user-menu .menu button + .menu');
    }
  };
})(Drupal);
