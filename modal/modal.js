// Assumed Class Names
const modalOpenerClass = "modalOpener";

function constructModals() {
  const mediaModalWrapper = document.querySelector(".mediaModalWrapper");
  const mediaModalElement = document.querySelector(".mediaModal");

  (function main() {
    initEventListeners();
  })();

  function initEventListeners() {
    document.addEventListener("click", function clickHandler(clickEvent) {
      if (clickEvent.target.classList.contains(modalOpenerClass)) {
        mediaModalWrapper.classList.remove("hidden");
        mediaModalElement.classList.remove("hidden");
      }
    });
  }
}

export default constructModals;
