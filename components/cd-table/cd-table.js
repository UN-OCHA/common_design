/**
 * Detect whether the table content overflows the available width.
 * Add tabindex and role if scrollWidth exceeds clientWidth for the container.
 * @TODO add a message to prompt scrolling.
 */
(function () {
  'use strict';

  var elements = document.querySelectorAll('.cd-table-container');

  function updateTable(event) {
    for (var i = 0, l = elements.length; i < l; i++) {
      var element = elements[i];
      var scrollWidth, clientWidth = element;
      var isOverflowing = element.scrollWidth > element.offsetWidth;

      if (isOverflowing) {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'group');
      } else {
        element.removeAttribute('tabindex');
        element.removeAttribute('role');
      }
    }
  }

  if (typeof window.ResizeObserver !== 'undefined') {
    new ResizeObserver(updateTable).observe(document.documentElement);
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
