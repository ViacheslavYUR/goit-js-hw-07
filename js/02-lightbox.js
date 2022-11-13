import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryItemsRef = galleryItems;
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItemsRef);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__item" href="${original}" onclick="return false" rel="noreferrer noopener">
   <img class="gallery__image"  src="${preview}" alt="${description}" />
 </a>;
    </li>`;
    })
    .join("");
}

let ligthbox = new SimpleLightbox(".gallery__item");
