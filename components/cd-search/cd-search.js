var searchButton = document.querySelector('.cd-search__btn');
var searchInput = document.querySelector('.cd-search__input');

function focusInput() {
  searchInput.focus();
}

if (searchButton) {
  searchButton.addEventListener('click', focusInput);
}
