// Home Recommended
$(".recommended-carousel").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: ".carousel__btn-right",
  prevArrow: ".carousel__btn-left",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 725,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// Popular section
$(".popular-carousel").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: ".carousel-popular__btn-right",
  prevArrow: ".carousel-popular__btn-left",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 825,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// Author Profile
// Author Book section
$(".carousel-author__books").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: ".carousel-author__books__btn-left",
  prevArrow: ".carousel-author__books__btn-right",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 825,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// User Profile page
const card = document.querySelectorAll(".profile__recentorders-card");
const cardCancelButton = document.querySelectorAll(
  ".profile__recentorders-card__body-info__cancel-button"
);
const statusDelivery = document.querySelectorAll(
  ".profile__recentorders-card__body-info__status"
);
const heartCircle = document.querySelectorAll(".card__buttons");
// Multi class toggler
const toggleMultipleClasses = (element, ...classes) =>
  classes.map((cl) => element.classList.toggle(cl));
// Cancel button add on click
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    cardCancelButton[i].classList.toggle("d-none");
  });
}

for (let i = 0; i < heartCircle.length; i++) {
  console.log(heartCircle);
  heartCircle[i].addEventListener("click", (e) => {
    console.log(heartCircle[i].firstElementChild.firstElementChild);
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
