(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdOchaServices = {
    attach: function (context, settings) {
      // Move the OCHA Services section to the header.
      this.moveToHeader('cd-ocha-services', 'cd-ocha-services-container');
    },

    /**
     * Hide and move OCHA Services to the top of the header after the target.
     */
    moveToHeader: function (id, target) {
      var section = document.getElementById(id);
      var container = document.getElementById(target);

      if (section && container) {
        // Ensure the element is hidden before moving it to avoid flickering.
        this.toggleVisibility(section, true);
        container.appendChild(section);
      }
    },

    toggleVisibility: function (element, hide) {
      element.setAttribute('cd-data-hidden', hide === true);
    }
  };
})(Drupal);
