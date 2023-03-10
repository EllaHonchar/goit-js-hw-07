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


let galleryNew = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  
  galleryNew.on('error.simplelightbox', function (e) {
     console.log(e);
  });


//   let gallery = new SimpleLightbox('.gallery a');
//   gallery.on('show.simplelightbox', function () {
//       // do somethingâ€¦
//   });
  
//   gallery.on('error.simplelightbox', function (e) {
//       console.log(e); // some usefull information
//   });
  
//   /