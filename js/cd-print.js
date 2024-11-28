/**
 * @file
 * Print helper.
 */

((Drupal) => {
  'use strict';

  Drupal.behaviors.cdPrint = {

    // Remove lazy loading before printing.
    window.addEventListener("beforeprint", (event) => {
      $('img').each(() => {
        $(this).removeAttr('loading'));
      }
    }

  };
})(Drupal);
