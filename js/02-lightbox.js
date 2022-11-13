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
      return `<li><a class="gallery__item" href="${original}" onclick="return false" rel="noreferrer noopener">
   <img class="gallery__image"  src="${preview}" alt="${description}"  />
 </a></li>`;
    })
    .join("");
}
const galleryImg = document.querySelectorAll(".gallery__image");

function createImgTitle(el) {
  for (let i = 0; i < galleryImg.length; i += 1) {
    const imgRef = galleryImg[i];
    imgRef.title = imgRef.alt;
  }
}
createImgTitle(galleryImg);

const ligthbox = new SimpleLightbox(".gallery__item");
// console.log(galleryImg);
