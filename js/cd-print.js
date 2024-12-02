/**
 * @file
 * Print helper.
 */

((Drupal) => {
  'use strict';

  Drupal.behaviors.cdPrint = {
    attach: function (context, settings) {

      // Remove lazy loading before printing.
      window.addEventListener('beforeprint', (event) => {
        document.querySelectorAll('[loading="lazy"]').forEach(element => {
          element.removeAttr('loading');
        });
      });

    }
  };
})(Drupal);
