(function (Drupal) {
  'use strict';

  Drupal.behaviors.cdObjectFit = {
    attach: function (context, settings) {
      if ( !Modernizr.objectfit ) {
        let imageContainers = document.getElementsByClassName('cd-card__image'), item;
        // IE 11 loop.
        for (item = 0; item < imageContainers.length; item++) {
          let image = imageContainers[item].querySelector('.cd-card__image img');
          let imgUrl = image.src;
          if (imgUrl) {
            imageContainers[item].style.backgroundImage = 'url(' + imgUrl + ')';
            imageContainers[item].classList.add('cd-ie-object-fit');
          }
        }
      }
    }
  };
})(Drupal);
