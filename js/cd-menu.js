(function (Drupal) {
  Drupal.behaviors.cdMenu = {
    attach: function (context, settings) {

      context.querySelector('.menu-item--expanded a').addEventListener("click", function(event) {
        event.preventDefault();
      }, false);

    }
  };
}(Drupal));
