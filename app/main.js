const ratingCard = document.querySelector(".rating__wrapper");
const successCard = document.querySelector(".appreciate__wrapper");
const selectedRatingText = document.querySelector("#selected-rating-text");

document.querySelector("#interactive-rating-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedInput = document.querySelector('input[name="rating"]:checked');
    if (selectedInput === null) alert("Please rate us!!");

    selectedRatingText.textContent = selectedInput.value;
    ratingCard.style.display = "none";
    successCard.style.display = "flex";
    successCard.focus();
});
