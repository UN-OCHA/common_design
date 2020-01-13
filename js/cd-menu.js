(function (Drupal) {
  Drupal.behaviors.cdMenu = {
    attach: function (context, settings) {
      // Update nested Drupal menus in the header.
      Drupal.behaviors.cdDropdown.updateDrupalTogglableMenus('.cd-header .cd-ocha-btn + .cd-dropdown');
    }
  };
}(Drupal));
