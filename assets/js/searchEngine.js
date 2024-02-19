const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");
const filter_wrapper = document.querySelector(".filter-wrapper");

window.addEventListener("DOMContentLoaded", (event) => {
    inputElement.addEventListener("input", () => {
        handleInputChange(inputElement);
    })
});
search_icon.addEventListener( "click", handleSearchCloseOnClick );
sort_wrapper.addEventListener( "click", handleSortIconOnClick );

function handleInputChange(inputElement) {
    const inputValue = inputElement.value;

    if(inputValue !== "") {
        search_icon.classList.add("search-close-icon-visible");
    } else {
        search_icon.classList.remove("search-close-icon-visible");
    }
}

function handleSearchCloseOnClick() {
    inputElement.value = "";
    search_icon.classList.remove("search-close-icon-visible");
}

function handleSortIconOnClick() {
    filter_wrapper.classList.toggle("filter-wrapper-open");
    document.querySelector("body").classList.toggle("filter-wrapper-overlay");
}