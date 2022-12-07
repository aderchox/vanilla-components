function constructStarRating(element) {
  const stars = makeStars();
  let _roundedRating;
  let _locked;

  (function main() {
    if (element.hasAttribute("rating-readonly")) {
      update();
      return;
    }
    const observer = new MutationObserver(function handleMutation(mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          update();
        }
      });
    });

    initEventListeners();
    update();
    observer.observe(element, {
      attributes: true,
    });
  })();

  function initEventListeners() {
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      star.addEventListener(
        "mouseenter",
        function mouseEnterHandler(mouseEnterEvent) {
          update(i + 1);
        }
      );
      star.addEventListener("click", function clickHandler(clickEvent) {
        if (_locked) {
          return;
        }
        // Triggers the mutation observer too automatically
        element.dataset.rating = i + 1;
        if (element.hasAttribute("rating-sticky")) {
          _locked = true;
        }
      });
    }
    element.addEventListener(
      "mouseleave",
      function mouseLeaveHandler(mouseLeaveEvent) {
        update();
      }
    );
  }

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

  function render(topFilledStarNumber) {
    if (_locked) {
      return;
    }
    const ratingUpperStarNumber = topFilledStarNumber || _roundedRating;
    for (const [index, star] of stars.entries()) {
      if (index < ratingUpperStarNumber) {
        star.innerHTML = "x";
      } else {
        star.innerHTML = "o";
      }
    }
  }

  function update(topFilledStarNumber) {
    topFilledStarNumber || setRoundedRating();
    render(topFilledStarNumber);
  }
}

function initStarRatings() {
  const starRatings = document.querySelectorAll(".star-rating");
  starRatings.forEach(function construct(starRating) {
    constructStarRating(starRating);
  });
}

export default initStarRatings;
