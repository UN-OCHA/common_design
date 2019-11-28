(function (Drupal) {
  Drupal.behaviors.cdDropdown = {
    attach: function (context, settings) {

      const dropdowns = context.querySelectorAll('[data-toggle="cd-dropdown"]');

      function toggleDropdown(e) {
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        // Add class to parent div for styling.
        this.closest('div').classList.toggle('js-open');
      }

      dropdowns.forEach(dropdown => dropdown.addEventListener('click', toggleDropdown));

      context.addEventListener('click', function(e) {
        collapseAll(e)
      });

      //When clicking outside the dropdown element, close it.
      function collapseAll(e) {
        var dropdownOpen = context.querySelector('.js-open').contains(e.target);
        console.log(e.target);

        if (!dropdownOpen) {
          context.querySelector('.js-open').classList.remove('js-open');
          console.log('click outside');
        }
      }

    }
  };
})(Drupal);
