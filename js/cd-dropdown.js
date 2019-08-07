Drupal.behaviors.cdDropdown = {
  attach: function (context, settings) {

    console.log('cdDropdown');
    const dropdowns = document.querySelectorAll('.cd-dropdown');

    // This emulates what jquery dropdown did - Adds class 'open' to parent of element with 'cd-dropdown' selector.
    function toggleOpen() {
      console.log('toggleOpen');
      this.closest('div').classList.toggle('open');
    }

    dropdowns.forEach(dropdown => dropdown.addEventListener('click', toggleOpen));

  }
};
