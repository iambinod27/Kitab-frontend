// Category-listing Page button
const categoryFilterbtn = document.querySelector(".category__filter-btn");
const filterModel = document.querySelector(".category__filter-column__wrapper");
const filterModelCloseBtn = document.querySelector(
  ".category__filter-column__wrapper__remove-btn"
);

categoryFilterbtn.addEventListener("click", (e) => {
  const filterModelVisibility = filterModel.getAttribute("visibility");
  if (filterModelVisibility == "false") {
    filterModel.setAttribute("visibility", true);
  } else if (filterModelVisibility == "true") {
    filterModel.setAttribute("visibility", false);
  }
});

filterModelCloseBtn.addEventListener("click", () => {
  filterModel.setAttribute("visibility", false);
});

window.addEventListener("click", (e) => {
  if (e.target.closest(".category__filter-column__wrapper") !== null) return;
  if (e.target.closest(".category__filter-btn") !== null) return;
  filterModel.setAttribute("visibility", false);
});
