document.addEventListener("DOMContentLoaded", (event) => {
  const starRatingElement = document.querySelector(".star-rating");
  const rating = parseFloat(starRatingElement.getAttribute("data-rating"));

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starRatingElement.innerHTML += '<i class="fas fa-star"></i>';
    } else if (i - 0.5 === rating) {
      starRatingElement.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    } else {
      starRatingElement.innerHTML += '<i class="far fa-star"></i>';
    }
  }
});
