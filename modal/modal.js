// Assumed Class Names
const modalOpenerClass = "modalOpener";
const modalBodyClass = "modalBody";
const modalWrapper = document.querySelector(".modalWrapper");
const modalPlace = document.querySelector(".modalPlace");

function constructModal(container, onOpen, onClose) {
  (function main() {
    initEventListeners();
  })();

  function initEventListeners() {
    const openerButton = container.querySelector(`.${modalOpenerClass}`);
    openerButton.addEventListener("click", function openModal(clickEvent) {
      modalWrapper.classList.remove("hidden");
      const modalBody = container.querySelector(`.${modalBodyClass}`);
      modalPlace.prepend(modalBody);
      container.classList.add("modalActive");
      onOpen(modalPlace, container);
    });
    modalWrapper.addEventListener("click", function closeModal(clickEvent) {
      const clickedOutOfModal = !clickEvent.target.closest(".modalPlace");
      if (clickedOutOfModal) {
        // This event listener triggers for all "container"s, so the ones that are not the active one must ignore it.
        if (!container.classList.contains("modalActive")) {
          return;
        }
        modalWrapper.classList.add("hidden");
        container.classList.remove("modalActive");
        container.prepend(modalPlace.firstChild);
        onClose(modalPlace, container);
      }
    });
  }
}

export default constructModal;
