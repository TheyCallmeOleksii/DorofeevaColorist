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

/**
  |============================
  | Для голусування на сайті
  |============================
*/

// document.addEventListener("DOMContentLoaded", (event) => {
//   const starRatingElement = document.querySelector(".star-rating");
//   let rating = parseFloat(starRatingElement.getAttribute("data-rating"));
//   const stars = starRatingElement.querySelectorAll(".fa-star");

//   function updateStars(rating) {
//     stars.forEach((star) => {
//       const value = parseInt(star.getAttribute("data-value"));
//       if (value <= rating) {
//         star.classList.remove("far");
//         star.classList.add("fas");
//       } else {
//         star.classList.remove("fas");
//         star.classList.add("far");
//       }
//     });
//   }

//   updateStars(rating);

//   stars.forEach((star) => {
//     star.addEventListener("click", () => {
//       rating = parseInt(star.getAttribute("data-value"));
//       starRatingElement.setAttribute("data-rating", rating);
//       updateStars(rating);
//     });

//     star.addEventListener("mouseover", () => {
//       const hoverRating = parseInt(star.getAttribute("data-value"));
//       updateStars(hoverRating);
//     });

//     star.addEventListener("mouseout", () => {
//       updateStars(rating);
//     });
//   });
// });
