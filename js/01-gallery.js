import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const itemConatainer = document.querySelector(".gallery");
const itemConatainerMarkup = createGalleryItems(galleryItems);
console.log(createGalleryItems(galleryItems));

itemConatainer.insertAdjacentHTML("beforeend", itemConatainerMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
