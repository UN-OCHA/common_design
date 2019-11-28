(function (Drupal) {
  Drupal.behaviors.cdMenu = {
    attach: function (context, settings) {

      // Media query event handler.
      if (matchMedia) {
        const mq = window.matchMedia("(max-width: 1023px)");
        // Add event listener to media query that fires when a change in viewport width is detected.
        mq.addEventListener("change", WidthChange);
        // Call handler to initialise on page load.
        WidthChange(mq);
      }

      function WidthChange(mq) {
        // Media query specific.
      }

      const dropdownMenus = context.querySelectorAll('.menu-item--expanded a');

      function menuLinks(e) {
        console.log('menu');
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        // Add class to parent div for styling.
        let dropdownMenu = this.nextElementSibling;
        console.log(dropdownMenu);
        dropdownMenu.closest('li').classList.toggle('js-open');
      }

      context.querySelector('.menu-item--expanded a').addEventListener("click", function(event) {
        event.preventDefault();
      }, false);

      dropdownMenus.forEach(dropdownMenu => dropdownMenu.addEventListener('click', menuLinks));

    }
  };
}(Drupal));
