const review = document.querySelector("#user-review-1");

review.addEventListener("keyup", (e) => {
  console.log(e.target.scrollHeight);
  review.style.height = "32px";
  review.style.height = `${e.target.scrollHeight + 20}px`;
  //   e.target.style.height = "5px";
  //   e.target.style.height = e.target.scrollHeight + 20 + "px";
});
