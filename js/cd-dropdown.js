(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdDropdown = {
    attach: function (context, settings) {
      document.documentElement.classList.remove('no-js');

      // Store context where all our private functions can access it.
      this.context = context;

      // Initialize toggable dropdown.
      this.initializeToggables();

      // Update nested Drupal menus in the header.
      this.updateDrupalTogglableMenus();
    },

    /**
     * Toggle the visibility of a toggable element.
     */
    toggle: function (toggler, collapse) {
      var element = toggler.nextElementSibling;
      if (element) {
        var expanded = collapse || toggler.getAttribute('aria-expanded') === 'true';

        // Switch the expanded/collapsed states.
        toggler.setAttribute('aria-expanded', !expanded);
        element.setAttribute('data-hidden', expanded);

        // Switch the labels.
        var labelWrapper = toggler.querySelector('[data-label-switch]');
        if (labelWrapper) {
          var label = labelWrapper.getAttribute('data-label-switch');
          labelWrapper.setAttribute('data-label-switch', labelWrapper.textContent);
          labelWrapper.textContent = label;
        }

        // Change the focus when expanded if a target is specified.
        if (element.hasAttribute('data-focus-target') && !expanded) {
          var target = this.context.getElementById(element.getAttribute('data-focus-target'));
          if (target) {
            target.focus();
          }
        }
      }
    },

    /**
     * Collapse all toggable elements.
     */
    collapseAll: function (exceptions) {
      var elements = this.context.querySelectorAll('[aria-expanded="true"]');

      elements.forEach(function (element) {
        // Elements can be directed to stay open in two ways:
        //  * We can apply an attribute directly in DOM
        //  * We can mark it as an exception when calling this function
        //
        // If neither apply, then close the element.
        if (!element.hasAttribute('data-toggable-keep') && exceptions.indexOf(element) === -1) {
          this.toggle(element, true);
        }
      });
    },

    /**
     * Get the togglable parents of the toggler element.
     */
    getToggableParents: function (element) {
      var elements = [];
      while (element && element !== this.context) {
        if (element.hasAttribute && element.hasAttribute('data-toggable')) {
          element = element.previousElementSibling;
        }
        // Store the toggling button of the togglable parent so that it can
        // be ignored when collapsing the opened toggables.
        if (element.hasAttribute && element.hasAttribute('data-toggler')) {
          elements.push(element);
        }
        element = element.parentNode;
      }
      return elements;
    },

    /**
     * Handle toggling of toggable elements.
     */
    handleToggle: function (event) {
      var target = event.currentTarget;
      if (target) {
        Drupal.behaviors.cdDropdown.collapseAll(Drupal.behaviors.cdDropdown.getToggableParents(target));
        Drupal.behaviors.cdDropdown.toggle(target);
      }
      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Handle togglable element visibility when pressing escape.
     *
     * Hide a toggable element when escape is pressed and the focus is on it
     * or on its toggler.
     *
     * This is to meet the WCAG 2.1 1.4.13: Content on Hover or Focus
     * criterion.
     *
     * @see https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html
     */
    handleEscape: function (event) {
      var key = event.which || event.keyCode;
      // Escape.
      if (key === 27) {
        var target = event.currentTarget;
        // Toggable element, get the toggling button.
        if (!target.hasAttribute('data-toggler')) {
          target = target.previousElementSibling;
        }
        // Focus the button and hide the content.
        if (target && target.hasAttribute('data-toggler')) {
          target.focus();
          Drupal.behaviors.cdDropdown.toggle(target, true);
        }
      }
    },

    /**
     * Handle global clicks outside of toggable elements, close them in this
     * case.
     */
    handleClickAway: function (event) {
      var target = event.target;
      if (target) {
        if (target.nodeName === 'A' && !target.hasAttribute('data-toggler')) {
          Drupal.behaviors.cdDropdown.collapseAll();
        }
        else {
          // Loop until we find a parent which is a toggable or toggler element
          // or we reach the "context" element.
          while (target && target !== Drupal.behaviors.cdDropdown.context) {
            if (target.hasAttribute) {
              // Skip if the clicked element belong to a toggler or a toggable
              // element.
              if (target.hasAttribute('data-toggler') || target.hasAttribute('data-toggable')) {
                return;
              }
            }
            target = target.parentNode;
          }
        }
        Drupal.behaviors.cdDropdown.collapseAll();
      }
    },

    /**
     * Create a svg icon.
     */
    createIcon: function (name, component, wrap) {
      var svgElem = this.context.createElementNS('http://www.w3.org/2000/svg', 'svg');
      var useElem = this.context.createElementNS('http://www.w3.org/2000/svg', 'use');
      useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#cd-icon--' + name);
      svgElem.setAttribute('class', 'cd-icon cd-icon--' + name);
      svgElem.appendChild(useElem);

      if (component && wrap) {
        var wrapper = this.context.createElement('span');
        wrapper.setAttribute('class', component + '__logo');
        wrapper.appendChild(svgElem);
        return wrapper;
      }
      return svgElem;
    },

    /**
     * Create a button to toggle a dropdown.
     */
    createButton: function (element) {
      var label = element.getAttribute('data-toggable');
      var logo = element.getAttribute('data-logo');
      var icon = element.getAttribute('data-icon');
      var component = element.getAttribute('data-component');

      // Create the button.
      var button = this.context.createElement('button');
      button.setAttribute('type', 'button');

      // Pre-label logo.
      if (logo) {
        button.appendChild(this.createIcon(logo, component, true));
      }

      // Button label.
      var labelWrapper = this.context.createElement('span');
      labelWrapper.appendChild(this.context.createTextNode(label));
      button.appendChild(labelWrapper);

      // Post-label icon.
      if (icon) {
        button.appendChild(this.createIcon(icon));
      }

      // BEM for class selectors.
      if (component) {
        button.setAttribute('class', component + '__btn');
        labelWrapper.setAttribute('class', component + '__btn-label');
      }

      // Do not collapse the dropdown when clicking outside.
      if (element.hasAttribute('data-toggable-keep')) {
        button.setAttribute('data-toggable-keep', '');
      }

      // Alternate label for when the button is expanded.
      if (element.hasAttribute('data-toggable-expanded')) {
        labelWrapper.setAttribute('data-label-switch', element.getAttribute('data-toggable-expanded'));
      }

      return button;
    },

    /**
     * Transform the element into a dropdown menu.
     */
    setToggable: function (element, toggler) {
      var expand = element.hasAttribute('data-toggable-expand') || false;

      // Create a button to toggle the element.
      if (!toggler) {
        toggler = this.createButton(element);
      }
      // Or ensure the toggler has the "button" role.
      //
      // @todo ensure that `space` and `enter` trigger the toggling?
      else if (toggler.nodeName !== 'BUTTON') {
        toggler.setAttribute('role', 'button');
      }

      // Set the toggling attributes of the toggler.
      toggler.setAttribute('data-toggler', '');
      toggler.setAttribute('aria-expanded', expand !== false);
      toggler.setAttribute('aria-haspopup', true);

      // For better conformance with the aria specs though it doesn't do
      // much in most screen reader right now (2020/01), we had the
      // `aria-controls` attribute.
      //
      // @todo generate an id for the toggable element if it has none?
      if (element.hasAttribute('id')) {
        toggler.setAttribute('aria-controls', element.getAttribute('id'));
      }

      // Add toggling function.
      toggler.addEventListener('click', this.handleToggle);

      // Collapse when pressing scape.
      toggler.addEventListener('keydown', this.handleEscape);
      element.addEventListener('keydown', this.handleEscape);

      // Mark the element as toggable so that it can be handled properly
      // by the global click handler.
      if (!element.hasAttribute('data-toggable')) {
        element.setAttribute('data-toggable', '');
      }

      // Hide the element.
      element.setAttribute('data-hidden', expand === false);

      // Add the toggler before the toggable element id not already.
      if (element.previousElementSibling !== toggler) {
        element.parentNode.insertBefore(toggler, element);
      }
    },

    /**
     * Initialize the toggable menus, adding a toggle button and event
     * handling.
     */
    initializeToggables: function () {
      // Collapse dropdowns when clicking outside of the toggable target.
      this.context.addEventListener('click', this.handleClickAway);

      // Initialize each toggable target
      var elements = this.context.querySelectorAll('[data-toggable]');
      for (var i = 0, l = elements.length; i < l; i++) {
        this.setToggable(elements[i]);
      }
    },

    /**
     * Update Drupal toggable nested menus.
     */
    updateDrupalTogglableMenus: function (selector) {
      // If selector wasn't supplied, set the default.
      selector = typeof selector !== 'undefined' ? selector : '.cd-nav .menu a + .menu';

      var elements = this.context.querySelectorAll(selector);
      for (var i = 0, l = elements.length; i < l; i++) {
        var element = elements[i];
        this.setToggable(element, element.previousElementSibling);
      }
    }
  };
})(Drupal);
