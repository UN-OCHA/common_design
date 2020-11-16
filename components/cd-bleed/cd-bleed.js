/**
 * Update the --gho-bleed-scrollbar-width css variable when the <html> element
 * is resized, including when the scrollbar is initially added.
 */
(function () {
  'use strict';

  function updateScrollBarWidth (event) {
    var width = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--cd-bleed-scrollbar-width', width + 'px');
  }

  if (typeof window.ResizeObserver !== 'undefined') {
    new ResizeObserver(updateScrollBarWidth).observe(document.documentElement);
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
