(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdMenu = {
    attach: function (context, settings) {

      /**
       * Update Drupal toggable nested menus.
       */
      function updateDrupalTogglableMenus() {
        var elements = context.querySelectorAll('.cd-nav .menu a + .menu');
        for (var i = 0, l = elements.length; i < l; i++) {
          var element = elements[i];
          Drupal.behaviors.cdDropdown.setToggable(element, element.previousElementSibling);
        }
      }

      // Update nested Drupal menus in the header.
      updateDrupalTogglableMenus();
    }
  };
})(Drupal);
