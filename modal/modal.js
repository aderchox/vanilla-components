// Assumed Class Names
const MODAL_OPENER = "modalOpener";
const MODAL_BODY = "modalBody";
const MODAL_ACTIVE = "modalActive";
const MODAL_CLOSING = "modalClosing";
const MODAL_WRAPPER = "modalWrapper";
const MODAL_PLACE = "modalPlace";
const MODAL_WRAPPER_HIDDEN = "hidden";

// The place where active modals will be placed in, and its wrapper.
const modalPlace = document.querySelector(`.${MODAL_PLACE}`);
const modalWrapper = document.querySelector(`.${MODAL_WRAPPER}`);

function constructModal(container, onOpen, onClose) {
  (function main() {
    initEventListeners();
  })();

  function initEventListeners() {
    const openerButton = container.querySelector(`.${MODAL_OPENER}`);
    const modalBody = container.querySelector(`.${MODAL_BODY}`);
    openerButton.addEventListener("click", function openModal(clickEvent) {
      // Do not open a modal while another one is half-way through of being closed.
      if (modalWrapper.classList.contains(MODAL_CLOSING)) {
        return;
      }
      modalWrapper.classList.remove(MODAL_WRAPPER_HIDDEN);
      // Move the requested modalBody from its container to the modalPlace.
      modalPlace.prepend(modalBody);
      // Highlight which container's modalBody is being shown.
      container.classList.add(MODAL_ACTIVE);
      // Run the user-requested onOpen callback.
      onOpen && onOpen(modalPlace, container);
    });
    modalWrapper.addEventListener("click", function closeModal(clickEvent) {
      // This event listener triggers for all "container"s, so the ones that are not the active one must ignore it.
      if (!container.classList.contains(MODAL_ACTIVE)) {
        return;
      }
      const clickedOutOfModal = !clickEvent.target.closest(`.${MODAL_PLACE}`);
      if (clickedOutOfModal) {
        modalWrapper.classList.add(MODAL_CLOSING);
        // Better grab the currentModalBody here, instead of within the event listener's callback, because at that point, it could have been changed.
        const currentModalBody = modalPlace.firstChild;
        // Run it only once ({once: true}) and then kill it, or else will run on next fade-in animation too, and the modal will never be able to completely re-appear.
        modalWrapper.addEventListener(
          "animationend",
          function returnModalBodyToItsContainer(e) {
            container.prepend(currentModalBody);
            container.classList.remove(MODAL_ACTIVE);
            modalWrapper.classList.remove(MODAL_CLOSING);
            modalWrapper.classList.add(MODAL_WRAPPER_HIDDEN);
          },
          { once: true }
        );
        // Run the user-requested onClose callback.
        onClose && onClose(modalPlace, container);
      }
    });
  }
}

export default constructModal;
