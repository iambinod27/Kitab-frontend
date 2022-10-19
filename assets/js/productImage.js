images = document.querySelectorAll(".product-details__img");
mainImage = document.querySelector(".product-details__img__main");
imageContainer = document.querySelector(".product-details__img__others");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", (e) => {
    // Remove img-active from all images
    for (let j = 0; j < images.length; j++)
      imageContainer.children[j].classList.remove("img-active");
    // Add img-active class to clicked ones
    images[i].classList.add("img-active");
    mainImage.src = images[i].src;
    mainImage.alt = images[i].alt;
  });
}
