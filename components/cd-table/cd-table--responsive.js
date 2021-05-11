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

  var elements = document.querySelectorAll('.cd-table-container');

  function updateTable(table) {
    if (table.parentNode.classList.contains('cd-table-container-processed')) {
      return;
    }
    table.parentNode.classList.add('cd-table-container-processed');

    for (var i = 0, l = elements.length; i < l; i++) {
      var element = elements[i];
      var scrollWidth, clientWidth = element;
      var isOverflowing = element.scrollWidth > element.offsetWidth;

      if (isOverflowing) {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'group');

        createMessage(element);

      } else {
        element.removeAttribute('tabindex');
        element.removeAttribute('role');
        // const message = document.getElementById('caption').nextElementSibling;
        // if (message) {
        //   message.remove();
        // }
      }
    }
  }


  /**
   * Create a button to toggle a dropdown.
   */
  function createMessage(element) {
    // create a new div element
    const newDiv = document.createElement('div');

    // and give it some content
    const newContent = document.createTextNode('Scroll to see more');

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById('caption');
    currentDiv.appendChild(newDiv);
    // document.body.insertBefore(newDiv, currentDiv);
  }

  // Find all non processed `cd-table--responsive` tables and update them.
  function updateTables() {
    var tables = document.querySelectorAll('.cd-table-container:not(.cd-table-container-processed)');
    for (var i = 0, l = tables.length; i < l; i++) {
      updateTable(tables[i]);
    }
  }

  // Register a mutation observer on the document to detect the addition
  // of `cd-table` tables.
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

  // Observe the entire DOM for the addition of the `cd-table` tables.
  observer.observe(document, {
    childList: true,
    subtree: true
  });

  // Process existing `cd-table-container-processed` tables.
  updateTables();

  // if (typeof window.ResizeObserver !== 'undefined') {
  //   new ResizeObserver(updateTable).observe(document.documentElement);
  // }
  // // Use an iframe to detect the resizing of the inner width of the window if
  // // ResizeObserver is not supported as we cannot use window.resize for that.
  // else {
  //   var iframe = document.createElement('iframe');
  //   iframe.style.cssText = 'position:absolute;width:100%;height:0;border:none;visibility:hidden;';
  //   iframe.onload = function () {
  //     iframe.contentWindow.onresize = updateScrollBarWidth;
  //     updateScrollBarWidth();
  //   }
  //   document.documentElement.appendChild(iframe);
  // }
})();
