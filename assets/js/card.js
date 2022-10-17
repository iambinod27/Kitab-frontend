const heartCircle = document.querySelectorAll(".card__buttons");
// Multi class toggler
const toggleMultipleClasses = (element, ...classes) =>
  classes.map((cl) => element.classList.toggle(cl));
for (let i = 0; i < heartCircle.length; i++) {
  heartCircle[i].addEventListener("click", (e) => {
    toggleMultipleClasses(
      // Heart icon active and inactive
      heartCircle[i].firstElementChild.firstElementChild,
      "bi-heart-fill",
      "text-danger",
      "text-light",
      "bi-heart"
    );
  });
}
