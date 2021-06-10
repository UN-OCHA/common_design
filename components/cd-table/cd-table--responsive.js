/**
 * Detect whether the table content overflows the available width.
 * Add tabindex and role if scrollWidth exceeds clientWidth for the container.
 * @TODO add a message to prompt scrolling.
 */

(function () {
  'use strict';

  function updateTable(table) {
    console.log('update table');

    if (table.classList.contains('cd-table-container-processed')) {
      return;
    }
    table.classList.add('cd-table-container-processed');

    var elements = document.querySelectorAll('.cd-table-container-processed');

    for (var i = 0, l = elements.length; i < l; i++) {
      var element = elements[i];
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
    console.log('no caption');
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
    console.log('update tables');
    for (var i = 0, l = tables.length; i < l; i++) {
      updateTable(tables[i]);
    }
  }

  updateTables();

  if (typeof window.ResizeObserver !== 'undefined') {
    new ResizeObserver(updateTables).observe(document.documentElement);
  }
  // Use an iframe to detect the resizing of the inner width of the window if
  // ResizeObserver is not supported as we cannot use window.resize for that.
  else {
    var iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:absolute;width:100%;height:0;border:none;visibility:hidden;';
    iframe.onload = function () {
      iframe.contentWindow.onresize = updateScrollBarWidth;
      updateScrollBarWidth();
    }
    document.documentElement.appendChild(iframe);
  }
})();
