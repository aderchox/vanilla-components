import constructModal from "./modal.js";

const editorModalContainer = document.querySelector(
  ".editor .mediaModalContainer"
);
constructModal(/*modalContainer*/ editorModalContainer, function infoFinder() {
  return editorModalContainer.parentNode.dataset.noteid;
});

const notesMediaModalContainers = document.querySelectorAll(
  ".note .mediaModalContainer"
);
for (const mediaModalContainer of notesMediaModalContainers) {
  constructModal(/*container*/ mediaModalContainer, function infoFinder() {
    return mediaModalContainer.parentNode.dataset.noteid;
  });
}
