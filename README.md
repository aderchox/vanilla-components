# Vanilla JavaScript Components

## Components:
- [Star Rating](#star-rating)
- [Modal](#modal)
- More coming...

---

### __Star Rating__
#### __Usage:__

In the HTML, link the stylesheet:
```html
<link rel="stylesheet" href="star-rating.css">
```

Also in the HTML, use the component like this:
```html
<div class="star-rating" data-rating="0"></div>
<div class="star-rating" data-rating="1"></div>
<div class="star-rating" data-rating="1.2" rating-sticky></div>
<div class="star-rating" data-rating="2"></div>
<div class="star-rating" data-rating="2.9" rating-readonly></div>
<div class="star-rating" data-rating="3"></div>
<div class="star-rating" data-rating="4"></div>
<div class="star-rating" data-rating="4.4"></div>
<div class="star-rating" data-rating="4.6"></div>
<div class="star-rating" data-rating="5"></div>
```

In the JavaScript:
```js
import initStarRatings from "./star-rating.js";
initStarRatings();
```

---

### __Modal__
#### __Usage:__

In the HTML, link the stylesheet:
```html
<link rel="stylesheet" href="modal.css">
```

Also in the HTML, use the component like this:
```html
<div class="modalContainer">
    <div class="modalBody">
        <!-- This modalBody will completely move to the modalPlace once the modal is opened using the below modalOpener button -->
    </div>
    <button class="modalOpener">Open Modal</button>
</div>
```

Also in the HTML, this is required for displaying the modal ("modalBody"s are moved in it):
```html
<div class="modalWrapper hidden">
    <div class="modalPlace"></div>
</div>
```

In the JavaScript:
```js
import constructModal from "./modal.js";
const modalContainer = document.querySelector(".modalContainer");
constructModal(
    modalContainer,
    function onOpen(modal, container) {},
    function onClose(modal, container) {}
);
```
