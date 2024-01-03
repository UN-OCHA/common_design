(function ($) {
  'use strict';

  // The videos get delivered as links to YouTube with image tags inside. Each
  // one needs to be prepped by JS with the following steps:
  //  - Add a JS button to dynamically load the video when clicked
  //  - Setup the listener for the button click
  const videos = document.querySelectorAll('.video');
  videos.forEach((thisVideo) => {
    // Create basic button with contents/styling
    const thisButton = document.createElement('button');
    thisButton.classList.add('video__button');
    thisButton.innerHTML = '<span class="visually-hidden">' + thisVideo.dataset.videoButtonLabel + '</span>';

    // Listen for interaction and load video
    thisButton.addEventListener('click', (ev) => {
      prepVideo(thisVideo);
    });

    // Insert button into DOM.
    thisVideo.appendChild(thisButton);

    // Prevent link from leading away now, and override with video
    const originalLink = thisVideo.querySelector('a');
    originalLink.addEventListener('click', (ev) => {
      prepVideo(thisVideo);
      ev.preventDefault();
    });

    // Wait for cursor to hover and warm the connection when we find it.
    originalLink.addEventListener('pointerover', (ev) => {
      if (thisVideo.dataset.videoConnected === 'true') {
        return;
      }

      addPrefetch('preconnect', 'https://www.youtube.com');
      addPrefetch('preconnect', 'https://www.google.com');
      thisVideo.dataset.videoConnected = 'true';
    });

  });

  // Accepts a DOM container and replaces its contents with a YouTube iframe.
  function prepVideo(video) {
    video.innerHTML = '<iframe class="video__iframe" src="https://www.youtube.com/embed/' + video.dataset.videoSlug + '?autoplay=1&playsinline=1&rel=0&enablejsapi=1&origin=' + encodeURIComponent(video.dataset.videoOrigin) + '" frameborder="0" allow="autoplay; fullscreen" sandbox="allow-same-origin allow-scripts"></iframe>';
  }

  // Warm TCP connections by adding <link>s to the <head>.
  function addPrefetch(kind, url, as) {
    const linkEl = document.createElement('link');
    linkEl.rel = kind;
    linkEl.href = url;
    if (as) {
      linkEl.as = as;
    }
    document.head.append(linkEl);
  }
})();
