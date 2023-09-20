(function (Drupal) {
  'use strict';

  /**
   * @see https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
   */
  Drupal.behaviors.cdDisclosure = {
    idPrefix: 'cd-disclosure--',

    attach: function (context, settings) {
      // Initialize toggable dropdown.
      this.initializeDisclosures();
    },

    /**
     * Set up all Disclosure widgets found in the DOM.
     *
     * For our purposes, the `disclosure` element is the wrapped content itself
     * and the button to toggle it is generated automatically by this script.
     */
    initializeDisclosures: function () {
      let disclosures = document.querySelectorAll('[data-cd-disclosure]');

      // All behavior is controlled by data attributes.
      disclosures.forEach((disclosure) => {
        // Set a random ID if none is found.
        let disclosureId = disclosure.getAttribute('id') || this.idPrefix + Math.floor(Math.random(1) * 100000000);

        // Apply ID if it wasn't there already.
        if (!disclosure.getAttribute('id')) {
          disclosure.setAttribute('id', disclosureId);
        }

        // Determine where to place the button.
        let positionAfter = disclosure.dataset.cdDisclosureInsert === 'after' || false;

        // Determine whether content is shown by default. We consider this the
        // edge-case so omitting the attribute assumes it is hidden.
        let contentVisible = disclosure.dataset.cdDisclosureShowByDefault === 'true' || false;

        // Extract button label
        let buttonText = disclosure.dataset.cdDisclosureLabel || Drupal.t('Toggle content');

        // Create the toggler button.
        let disclosureButton = document.createElement('button');
        disclosureButton.setAttribute('aria-controls', disclosureId);
        disclosureButton.setAttribute('aria-expanded', contentVisible);
        disclosureButton.innerText = buttonText;
        disclosureButton.classList.add('cd-button');

        // Based on position determined earlier, insert button.
        if (positionAfter) {
          disclosure.after(disclosureButton);
        }
        else {
          disclosure.before(disclosureButton);
        }

        // Set an event listener to show/hide the content.
        disclosureButton.addEventListener('click', (ev) => {
          // Get current state of button.
          let wasExpanded = disclosureButton.getAttribute('aria-expanded') === 'true';

          // Invert state of button.
          disclosureButton.setAttribute('aria-expanded', !wasExpanded);
          let isExpanded = !wasExpanded;

          // Adjust content according to new button state
          if (isExpanded) {
            disclosure.classList.remove('cd-disclosure--is-collapsed');
            disclosure.classList.add('cd-disclosure--is-expanded');
          }
          else {
            disclosure.classList.remove('cd-disclosure--is-expanded');
            disclosure.classList.add('cd-disclosure--is-collapsed');
          }
        });
      });
    },
  };
})(Drupal);
