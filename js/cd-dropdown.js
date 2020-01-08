(function (Drupal) {
  Drupal.behaviors.cdDropdown = {
    attach: function (context, settings) {

      /**
       * Get the toggle button's next element sibling.
       */
      function getNextElementSibling(element) {
        var sibling = element.nextSibling;
        while (sibling) {
          if (sibling.nodeType === 1) {
            return sibling;
          }
          sibling = sibling.nextSibling;
        }
        return null;
      }

      /**
       * Toggle the visibility of a dropdown.
       */
      function toggle(button, collapse) {
        var element = getNextElementSibling(button);
        var expanded = collapse || button.getAttribute('aria-expanded') === 'true';

        // Switch the expanded/collapsed states.
        button.setAttribute('aria-expanded', !expanded);
        element.setAttribute('data-hidden', expanded);

        // Switch the labels.
        if (button.hasAttribute('data-label-switch')) {
          var span = button.querySelector('span');
          var label = button.getAttribute('data-label-switch');
          button.setAttribute('data-label-switch', span.firstChild.nodeValue);
          span.firstChild.nodeValue = label;
        }

        // Change the focus when expanded if a target is specified.
        if (element.hasAttribute('data-focus-target') && !expanded) {
          var target = context.getElementById(element.getAttribute('data-focus-target'));
          if (target) {
            target.focus();
          }
        }
      }

      /**
       * Collapse all dropdowns.
       */
      function collapseAll(exception) {

        console.log("collapseAll");
        var elements = context.querySelectorAll('[aria-expanded="true"]');
        console.log(elements);
        for (var i = 0, l = elements.length; i < l; i++) {
          var element = elements[i];
          console.log(element);
          if (element !== exception && !element.hasAttribute('data-toggable-keep')) {
            toggle(elements[i], true);
          }
        }
      }

      /**
       * Handle toggling of dropdowns.
       */
      function handleToggle(event) {
        var target = event.target;
        while (target && target.nodeName !== 'BUTTON') {
          target = target.parentNode;
        }
        if (target) {
          collapseAll(target);
          toggle(target);
        }
      }

      /**
       * Handle global clicks outside of toggable elements, close them in this case.
       */
      function clickAway(event) {

        console.log("clickAway");
        var target = event.target;
        console.log(target);
        console.log(target.nodeName);
        if (target) {
          if (target.nodeName === 'A') {
            collapseAll();
          }
          else if (target.hasAttribute) {
            var body = document.body;
            while (target && target.hasAttribute && !target.hasAttribute('aria-expanded') && !target.hasAttribute('data-hidden') && target !== body) {
              target = target.parentNode;
            }
            if (target && target.hasAttribute && !target.hasAttribute('aria-expanded') && !target.hasAttribute('data-hidden')) {
              collapseAll();
            }
          }
        }
      }

      /**
       * Create a button to toggle a dropdown.
       */
      function createButton(element, label, expand, icon, component, logo) {
        var id = element.getAttribute('id');

        var button = context.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('id', id + '-toggle');
        button.setAttribute('aria-expanded', expand !== false);
        button.setAttribute('aria-haspopup', true);
        button.setAttribute('aria-owns', id);
        button.setAttribute('value', label);

        var labelWrapper = context.createElement('span');
        labelWrapper.appendChild(context.createTextNode(label));
        button.appendChild(labelWrapper);

        // SVG arrow icon.
        if (element.hasAttribute('data-icon')) {
          var svgElem = context.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            useElem = context.createElementNS('http://www.w3.org/2000/svg', 'use');
          useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#cd-icon--' + icon);
          svgElem.setAttribute('class', 'cd-icon cd-icon--' + icon);
          svgElem.appendChild(useElem);
          button.appendChild(svgElem);
        }

        // SVG logo icon.
        if (element.hasAttribute('data-logo')) {
          var svgLogoElem = context.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            useLogoElem = context.createElementNS('http://www.w3.org/2000/svg', 'use');
          useLogoElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#cd-icon--' + logo);
          svgLogoElem.setAttribute('class', 'cd-icon--' + logo);
          svgLogoElem.appendChild(useLogoElem);
          var logoWrapper = document.createElement("span");
          logoWrapper.setAttribute('class', component + '__logo');
          logoWrapper.appendChild(svgLogoElem);
          button.prepend(logoWrapper);
        }

        // BEM for class selectors.
        if (element.hasAttribute('data-component')) {
          button.setAttribute('class', component + '__btn');
          labelWrapper.setAttribute('class', component + '__btn-label');
        }

        // Extra labelling.
        if (element.hasAttribute('aria-labelledby')) {
          button.setAttribute('aria-labelledby', element.getAttribute('aria-labelledby'));
        }

        // Do not collapse the dropdown when clicking outside.
        if (element.hasAttribute('data-toggable-keep')) {
          button.setAttribute('data-toggable-keep', '');
        }

        // Alternate label for when the button is expanded.
        if (element.hasAttribute('data-toggable-expanded')) {
          button.setAttribute('data-label-switch', element.getAttribute('data-toggable-expanded'));
        }

        // Add toggling function.
        button.addEventListener('click', handleToggle);
        return button;

      }

      /**
       * Transform the element into a dropdown menu.
       */
      function setToggable(element) {
        if (!element.hasAttribute('id')) {
          return;
        }

        var label = element.getAttribute('data-toggable');
        var expand = element.hasAttribute('data-toggable-expand') || false;
        var icon = element.getAttribute('data-icon');
        var component = element.getAttribute('data-component');
        var logo = element.getAttribute('data-logo');
        var button = createButton(element, label, expand, icon, component, logo);

        // Hide the element.
        element.setAttribute('data-hidden', expand === false);

        // Add the button before the toggable element.
        element.parentNode.insertBefore(button, element);
      }

      /**
       * Initialize the toggable menus, adding a toggle button and event handling.
       */
      function initializeToggables() {
        var elements = context.querySelectorAll('[data-toggable]');
        for (var i = 0, l = elements.length; i < l; i++) {
          setToggable(elements[i]);
        }
      }

      /**
       * Main logic.
       * If Drupal object exists, javascript is enabled.
       */
      if (Drupal) {

        if (!document.documentElement.classList.contains('js')) {
          document.documentElement.classList.add('no-js');
        } else {
          document.documentElement.classList.remove('no-js');
        }

        // Collapse popups when clicking outside of the toggable target.
        context.addEventListener('click', clickAway);

        // Initialize toggable dropdown.
        initializeToggables();
      }

    }
  };
})(Drupal);
