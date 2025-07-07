const ratingCard = document.querySelector(".rating__wrapper");
const successCard = document.querySelector(".appreciate__wrapper");
const selectedRatingText = document.querySelector("#selected-rating-text");

document.querySelector("#interactive-rating-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedValue = document.querySelector('input[name="rating"]:checked').value;

    selectedRatingText.textContent = selectedValue;
    ratingCard.style.display = "none";
    successCard.style.display = "flex";
});
