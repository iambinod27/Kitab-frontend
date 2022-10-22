const images = document.querySelectorAll(".product-details__img");
const mainImage = document.querySelector(".product-details__img__main");
const imageContainer = document.querySelector(".product-details__img__others");

// Wait for defer scripts to load
document.addEventListener("DOMContentLoaded", () => {
  // Zoom image on mouseover
  const zoomImageWrapper = document.querySelector("#zoom-img-wrapper");

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", (e) => {
      // Remove img-active from all images
      for (let j = 0; j < images.length; j++)
        imageContainer.children[j].classList.remove("img-active");
      // Add img-active class to clicked ones
      images[i].classList.add("img-active");
      mainImage.src = images[i].src;
      mainImage.alt = images[i].alt;

      // Select class zoomImg and replace the source
      zoomImageWrapper.lastElementChild.src = images[i].src;
    });
  }
});
