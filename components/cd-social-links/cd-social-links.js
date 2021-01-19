(function () {
  "use strict";

  // Collect all URL buttons.
  var urlButtons = document.querySelectorAll('.cd-social-links__link--copy');

  // Process links so they copy URL to clipboard.
  urlButtons.forEach(function (el) {
    el.addEventListener('click', function (ev) {
      var tempInput = document.createElement('input');
      var urlToCopy = el.href;

      try {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(urlToCopy);
        }
        else {
          // Copy URL in browser bar to clipboard.
          document.body.appendChild(tempInput);
          tempInput.value = urlToCopy;
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        // If we got this far, don't let the link click through.
        ev.preventDefault();
        ev.stopPropagation();

        // Show user feedback and remove after some time.
        el.classList.add('is--showing-message');
        setTimeout(function () {
          el.classList.remove('is--showing-message');
        }, 2500);
      } catch (err) {
        // Log errors to console.
        console.error(err);
      }
    })
  });
})();
