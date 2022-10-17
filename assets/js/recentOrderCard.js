// User Profile page
const card = document.querySelectorAll(".profile__recentorders-card");
const cardCancelButton = document.querySelectorAll(
  ".profile__recentorders-card__body-info__cancel-button"
);
const statusDelivery = document.querySelectorAll(
  ".profile__recentorders-card__body-info__status"
);

// Cancel button add on click
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    cardCancelButton[i].classList.toggle("d-none");
  });
}
