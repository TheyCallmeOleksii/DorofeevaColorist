const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const reviewSlider = document.querySelector(".review-slider");
const reviews = document.querySelectorAll(".review-card");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = reviews.length - 1;
  }
  updateSlider();
});

nextButton.addEventListener("click", () => {
  if (currentIndex < reviews.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * 100;
  reviews.forEach((review) => {
    review.style.transform = `translateX(${offset}%)`;
  });
}
