import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGallery = (images) =>
  images
    .map(
      ({ preview, original, description }) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
          />
        </a>
      </div>
    `
    )
    .join("");


gallery.innerHTML = makeGallery(galleryItems);

    gallery.addEventListener('click', modalImg);

    function modalImg(event) {
        event.preventDefault();
    
        if (event.target.nodeName !== 'IMG') {
            return;
        }
    
        const instance = basicLightbox.create(
            `<img src="${event.target.closest('.gallery__link').href}"
            width="800"
            height="600">`
        );
        instance.show();
    
        window.addEventListener("keydown", (event) => {
            if (event.code === 'Escape') {
                instance.close();
            }
        })
    
    }