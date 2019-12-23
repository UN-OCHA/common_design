(function (Drupal) {
  Drupal.behaviors.cdMenu = {
    attach: function (context, settings) {

      var dropdownMenus = document.querySelectorAll('.menu-item--expanded a');

      dropdownMenus.forEach(dropdown => dropdown.addEventListener('click', menuLinks));

      function menuLinks(event) {
        let menuExpanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !menuExpanded);

        let dropdownMenu = this.nextElementSibling;
        dropdownMenu.setAttribute('data-hidden', menuExpanded);

        event.preventDefault();
        event.stopPropagation();
      }
    }
  };
}(Drupal));
