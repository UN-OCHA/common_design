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
      // Find all the unprocessed Disclosures. See the end of this function
      // where this attribute gets set on each `disclosure` element.
      let disclosures = document.querySelectorAll('[data-cd-disclosure]:not([data-cd-processed="true"])');

      // Loop through each Disclosure and prepare them for user interaction.
      disclosures.forEach((disclosure) => {
        // Set a random ID if none is found.
        let disclosureId = disclosure.getAttribute('id') || this.idPrefix + Math.floor(Math.random(1) * 1000000000000).toString(16);

        // Apply ID if it wasn't there already.
        if (!disclosure.getAttribute('id')) {
          disclosure.setAttribute('id', disclosureId);
        }

        // Determine where to place the button.
        let positionAfter = disclosure.dataset.cdDisclosureInsert === 'after' || false;

        // Determine whether content is shown by default. We consider this the
        // edge-case so omitting the attribute assumes it is hidden.
        let contentVisible = disclosure.dataset.cdDisclosureExpanded === 'true' || false;

        // Extract button label.
        let buttonText = disclosure.dataset.cdDisclosureLabel || Drupal.t('Toggle content');

        // Determine button classnames.
        let buttonClassnames = disclosure.dataset.cdDisclosureClassnames
          ? disclosure.dataset.cdDisclosureClassnames.split(' ')
          : ['cd-button'];

        // Create the toggler button.
        let disclosureButton = document.createElement('button');
        disclosureButton.setAttribute('id', 'cd-for--' + disclosureId);
        disclosureButton.setAttribute('aria-controls', disclosureId);
        disclosureButton.setAttribute('aria-expanded', contentVisible);
        disclosureButton.innerText = buttonText;
        if (disclosure.dataset.cdDisclosureClassnames !== '') {
          disclosureButton.classList.add(...buttonClassnames);
        }

        // Set the state of the Disclosure itself.
        if (contentVisible) {
          disclosure.setAttribute('data-cd-disclosure-expanded', 'true');
        }
        else {
          disclosure.setAttribute('data-cd-disclosure-expanded', 'false');
          disclosure.classList.add('cd-disclosure--is-collapsed');
        }

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
          let isExpanded = !wasExpanded;
          disclosureButton.setAttribute('aria-expanded', isExpanded);

          // Adjust the Disclosure according to new button state.
          disclosure.setAttribute('data-cd-disclosure-expanded', isExpanded);
          if (isExpanded) {
            disclosure.classList.remove('cd-disclosure--is-collapsed');
          }
          else {
            disclosure.classList.add('cd-disclosure--is-collapsed');
          }
        });

        // Mark this Disclosure as processed, to avoid double initialization in
        // case this function runs a second time.
        disclosure.setAttribute('data-cd-processed', true);
      });
    },
  };
})(Drupal);
