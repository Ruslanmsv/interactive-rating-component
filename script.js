const ratingComponent = document.querySelector(".rating-component");
const thanksState = document.querySelector(".thanks-state");
const selectedRatingOutput = document.getElementById("selected-rating");

const form = document.getElementById("submit-form");

form.onsubmit = (event) => {
  event.preventDefault();

  // getting selected rating
  const formData = new FormData(form);
  const selectedRating = formData.get("rating");
  selectedRatingOutput.textContent = selectedRating; 

  // hiding previous pop-up and showing new one
  ratingComponent.classList.add("hidden");
  thanksState.classList.remove("hidden");
};
