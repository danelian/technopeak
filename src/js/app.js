$(document).ready(function () {

  /*=== Search (Header) ==================================*/
  let searchForm = document.querySelector("#searchForm");
  let searchInput = document.querySelector("#searchForm .search-input");
  let searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", (e) => {
    if (!searchForm.classList.contains('active')) {
      e.preventDefault();
    }
    searchForm.classList.toggle("active");
    searchInput.focus();
  });
  window.onscroll = () => {
    searchForm.classList.remove("active");
  }
  document.addEventListener("click", (event) => {
    if (!searchForm.contains(event.target)) {
      searchForm.classList.remove("active");
    }
  });
	// document.addEventListener("click", (event) => {
	// 	if (!event.target.matches("#searchForm, #searchButton, #searchButton i, #searchInput")) {
	// 		searchForm.classList.remove("active");
	// 	}
	// });

});