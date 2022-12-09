// Assumed Class Names
const modalOpenerClass = "modalOpener";
const mediaModalWrapper = document.querySelector(".mediaModalWrapper");

function constructModal(container, infoFinder) {
  (function main() {
    initEventListeners(container);
  })();

  function initEventListeners(container) {
    const openerButton = container.querySelector(`.${modalOpenerClass}`);
    openerButton.addEventListener("click", function clickHandler(clickEvent) {
      mediaModalWrapper.classList.remove("hidden");
    });
    mediaModalWrapper.addEventListener(
      "click",
      function clickHandler(clickEvent) {
        const clickedOutOfModal =
          !clickEvent.target.closest(".mediaModalOutput");
        if (clickedOutOfModal) {
          mediaModalWrapper.classList.add("hidden");
        }
      }
    );
  }
}

export default constructModal;
