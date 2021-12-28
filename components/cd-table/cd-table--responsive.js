/**
 * Detect whether the table content overflows the available width.
 * Add tabindex and role if scrollWidth exceeds clientWidth for the container.
 * Add a message to prompt scrolling.
 */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdTables = {
    attach: function (context, settings) {
      document.documentElement.classList.remove('no-js');
      // Bind the event handlers so that `this` corresponds to the current
      // object and can be used inside the event handling functions.
      this.handleResize = this.handleResize.bind(this);

      // Initialize tables.
      this.initializeTables();
    },

    // Update the table container elements when the window is resized.
    handleResize: function () {
      var elements = document.querySelectorAll('[data-cd-scrollable');
      for (var i = 0; i < elements.length; i++) {
        this.updateTable(elements[i]);
      }
    },

    updateTable: function(element) {
      // Determine if the table width exceeds the available space.
      var isOverflowing = element.scrollWidth > element.clientWidth;

      if (!isOverflowing) {
        this.unsetTableScroll(element);
      }
      else {
        this.setTableScroll(element);
      }
      // Mark the element as processed.
      if (!element.hasAttribute('cd-table-container-processed')) {
        element.setAttribute('cd-table-container-processed', true);
      }
    },

    setTableScroll: function (element) {
      var messageInCaption = element.hasAttribute('tabindex');
      element.setAttribute('tabindex', '0');
      element.setAttribute('role', 'group');
      if (!messageInCaption) {
        this.createMessage(element);
      }
    },

    unsetTableScroll: function (element) {
      element.removeAttribute('tabindex');
      element.removeAttribute('role');

      var tableMessage = element.querySelector('.cd-table--message');
      if (tableMessage !== null) {
        var messageDiv = element.querySelector('.cd-table--message');
        messageDiv.parentNode.removeChild(messageDiv);
      }
    },

    // Create the message to prompt scrolling.
    createMessage: function (element) {
      var tableCaption = element.querySelector('caption');
      var messageText = element.getAttribute('data-cd-scrollable') || 'Scroll to see more';
      var messageDiv = document.createElement('div');
      messageDiv.classList.add('cd-table--message');
      messageDiv.appendChild(document.createTextNode(messageText));
      tableCaption.appendChild(messageDiv);
    },

    // Initialize the tables, and event handling.
    initializeTables: function() {
      window.addEventListener('resize', this.handleResize);

      // Initial setup.
      this.handleResize();
    }
  };
})(Drupal);
