const ratingCard = document.querySelector(".rating-wrapper");
const successCard = document.querySelector(".message-wrapper");
const selectedRatingText = document.querySelector("#selected-rating-text");

document.querySelector(".rating-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedValue = document.querySelector(
    'input[name="rating"]:checked'
  ).value;

  selectedRatingText.textContent = selectedValue;
  ratingCard.style.display = "none";
  successCard.style.display = "flex";
});
