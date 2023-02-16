import constructModal from "./modal.js";

const mediaModalContainers = document.querySelectorAll(".modalContainer");

for (const mediaModalContainer of mediaModalContainers) {
  constructModal(
    mediaModalContainer,
    function onOpen(modalPlace, container) {
      modalPlace.dataset.noteid = container.parentNode.dataset.noteid;
    },
    function onClose(modalPlace) {
      modalPlace.dataset.noteid = "";
    }
  );
}
