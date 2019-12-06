(function (Drupal) {
  Drupal.behaviors.cdDropdown = {
    attach: function (context, settings) {

      const dropdownButtons = context.querySelectorAll('[data-toggle="cd-dropdown"]');

      function toggleDropdown(e) {
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);

        //console.log(this); // dropdownButton
        console.log(e.target);

        // The sibling element should have class="cd-dropdown"
        let dropdown = this.nextElementSibling;
        console.log(dropdown);
        // Add class to parent div for styling.
        dropdown.parentElement.classList.toggle('js-open');
      }

      // IE11 safe, replaces fat arrow function
      // dropdownButtons.forEach(dropdownButton => dropdownButton.addEventListener('click', toggleDropdown));
      var forEach = Array.prototype.forEach;
      forEach.call(dropdownButtons, function(dropdownButton) {
        dropdownButton.addEventListener('click', toggleDropdown);
      });

      context.addEventListener('click', function(e) {
        collapseAll(e)
      });

      //When clicking outside the dropdown element, close it.
      function collapseAll(e) {

        let dropdownOpen = context.querySelector('.js-open').contains(e.target);
        console.log(dropdownOpen);

        if (!dropdownOpen) {
          context.querySelector('.js-open').classList.remove('js-open');
          console.log('click outside');
        }
      }
    }
  };
})(Drupal);
