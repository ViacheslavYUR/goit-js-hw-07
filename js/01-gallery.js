import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsRef = galleryItems;
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItemsRef);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg" onclick="return false" rel="noreferrer noopener">
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

galleryContainer.addEventListener("click", imgGalleryclick);

function imgGalleryclick(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const parentImgEl = e.target.closest(".gallery__link");

  parentImgEl.href = e.target.dataset.source;
//   console.log(parentImgEl);

  openModalWindow(parentImgEl);
}

function openModalWindow(parentImgEl) {
  const instance = basicLightbox.create(`
    <img src="${parentImgEl.href}" width="800" height="600">
`);

  instance.show();
}
//   console.log(markup);
