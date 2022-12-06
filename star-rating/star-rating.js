function constructStarRating(element) {
  const stars = makeStars();
  let _roundedRating;

  (function main() {
    const observer = new MutationObserver(function handleMutation(mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          setRoundedRating();
          render();
        }
      });
    });

    setRoundedRating();
    render();
    observer.observe(element, {
      attributes: true,
    });
  })();

  function makeStars() {
    const stars = [];
    const star = document.createElement("div");
    star.classList.add("star");
    for (let i = 0; i < 5; i++) {
      const starChild = star.cloneNode();
      element.append(starChild);
      stars.push(starChild);
    }
    return stars;
  }

  function setRoundedRating() {
    const rating = +element.dataset.rating;
    if (isNaN(rating)) {
      console.error(
        `The specified value for the rating attribute ("${element.dataset.rating}") is not convertible to a number.`
      );
      return 1;
    }
    if (rating < 0 || rating > 5) {
      console.error(
        `The specified value for the rating attribute is not valid. The value of the rating attribute must be a number from 0 to 5 (inclusive), but ${rating} is passed.`
      );
      return 1;
    }
    _roundedRating = Math.round(rating);
    // No error.
    return 0;
  }

  function render() {
    const ratingUpperStarNumber = _roundedRating;
    for (const [index, star] of stars.entries()) {
      if (index < ratingUpperStarNumber) {
        star.innerHTML = "x";
      } else {
        star.innerHTML = "o";
      }
    }
  }
}

function initStarRatings() {
  const starRatings = document.querySelectorAll(".star-rating");
  starRatings.forEach(function construct(starRating) {
    constructStarRating(starRating);
  });
}

export default initStarRatings;
