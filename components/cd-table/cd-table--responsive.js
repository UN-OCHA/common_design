/**
 * Detect whether the table content overflows the available width.
 * Add tabindex and role if scrollWidth exceeds clientWidth for the container.
 * @TODO add a message to prompt scrolling.
 */

(function () {
  'use strict';

  // Feature detection.
  if (typeof MutationObserver === 'undefined') {
    return;
  }

  function updateTable(table) {

    if (table.classList.contains('cd-table-container-processed')) {
      return;
    }
    table.classList.add('cd-table-container-processed');

    var elements = document.querySelectorAll('.cd-table-container-processed');

    for (var i = 0, l = elements.length; i < l; i++) {
      var element = elements[i];
      var scrollWidth, clientWidth = element;
      var isOverflowing = element.scrollWidth > element.clientWidth;

      if (isOverflowing) {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'group');

        console.log(isOverflowing);
        createMessage(element);

      }
      else {
        element.removeAttribute('tabindex');
        element.removeAttribute('role');
        console.log(isOverflowing);
      }
    }
  }

  function createMessage(element) {
    console.log(element);
    const newDiv = document.createElement('div');
    newDiv.classList.add('cd-table--message');
    const newContent = document.createTextNode('Scroll to see more');
    newDiv.appendChild(newContent);
    const tableCaption = document.getElementById('cd-table__caption');
    tableCaption.appendChild(newDiv);
  }

  // Find all non processed `cd-table-container` divs and update them.
  function updateTables() {
    var tables = document.querySelectorAll('.cd-table-container:not(.cd-table-container-processed)');
    for (var i = 0, l = tables.length; i < l; i++) {
      updateTable(tables[i]);
    }
  }

  // Register a mutation observer on the document to detect the addition
  // of `cd-table-container` divs.
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0, l = mutations.length; i < l; i++) {
      var mutation = mutations[i];
      if (mutation.type === 'childList' && mutation.addedNodes) {
        updateTables();
        // No need to continue further.
        return;
      }
    }
  });

  // Observe the entire DOM for the addition of the `cd-table-container` divs.
  observer.observe(document, {
    childList: true,
    subtree: true
  });

  // Process existing `cd-table-container-processed` tables.
  updateTables();
})();
