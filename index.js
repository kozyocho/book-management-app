const searchTab = document.getElementById("js-search-tab");
const wishlistTab = document.getElementById("js-wishlist-tab");
const doneTab = document.getElementById("js-done-tab");

wishlistTab.addEventListener("click", function () {
  searchTab.classList.toggle("active");
  wishlistTab.classList.toggle("active");
});
searchTab.addEventListener("click", function () {
  searchTab.classList.toggle("active");
  wishlistTab.classList.toggle("active");
});
doneTab.addEventListener("click", function () {
  doneTab.classList.toggle("active");
  wishlistTab.classList.toggle("active");
});
