import constructModal from "./modal.js";

const mediaModalContainers = document.querySelectorAll(".modalContainer");

for (const mediaModalContainer of mediaModalContainers) {
  constructModal(
    mediaModalContainer,
    function onOpen(modal, container) {
      modal.dataset.noteid = container.parentNode.dataset.noteid;
    },
    function onClose(modal) {
      modal.dataset.noteid = "";
    }
  );
}
