(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdMenu = {
    attach: function (context, settings) {
      // Update nested Drupal menus in the header.
      Drupal.behaviors.cdDropdown.updateDrupalTogglableMenus('.cd-nav .menu button + .menu');
    }
  };
})(Drupal);
