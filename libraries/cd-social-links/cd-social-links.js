(function () {
  'use strict';

  // Collect all "copy" URL buttons.
  var urlButtons = document.querySelectorAll('.cd-social-links__button--copy');

  // Process links so they copy URL to clipboard.
  urlButtons.forEach(function (el) {
    // First, define the status element for each button.
    var status = el.parentNode.querySelector('[role=status]');

    // Add our event listener so people can copy to clipboard.
    el.addEventListener('click', function (ev) {
      var tempInput = document.createElement('input');
      var urlToCopy = el.dataset.url;

      try {
        if (navigator.clipboard) {
          // Easy way possible?
          navigator.clipboard.writeText(urlToCopy);
        }
        else {
          // Legacy method
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
        el.parentNode.classList.add('is--showing-message');
        status.innerText = el.dataset.message;

        // Hide message.
        setTimeout(function () {
          el.parentNode.classList.remove('is--showing-message');
        }, 2500);
        // After message is hidden, remove status contents.
        setTimeout(function () {
          status.innerText = '';
        }, 3000);
      }
      catch (err) {
        // Log errors to console.
        console.error(err);
      }
    });
  });
})();
