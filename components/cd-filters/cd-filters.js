function cdFiltersToggle() {
  const filtersButton = document.querySelector('.cd-filters__btn');

// Media query event handler.
  if (matchMedia) {
    const mq = window.matchMedia('(max-width: 991px)');
    // Add event listener to media query that fires when a change in viewport width is detected.
    mq.addListener(WidthChange);
    // Call handler to initialise on page load.
    WidthChange(mq);
  }

  function WidthChange(mq) {
    if (mq.matches) {
      filtersButton.addEventListener('click', toggleFilters);
    }
  }

  function toggleFilters() {
    this.closest('div').classList.toggle('js-filtersOpen');
  }

};

cdFiltersToggle();
