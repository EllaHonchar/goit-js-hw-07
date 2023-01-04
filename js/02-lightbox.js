import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGallery = (images) =>
  images
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
          />
        </a>`
    )
    .join("");


gallery.innerHTML = makeGallery(galleryItems);


const galleryNew = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  
  galleryNew.addEventListener("click", (event) => {
    event.preventDefault();
  });
