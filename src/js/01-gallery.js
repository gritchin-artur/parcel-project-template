// Выполняй это задание в файлах 01 - gallery.html и 01 - gallery.js. 
// Разбей его на несколько подзадач:

// Добавь библиотеку SimpleLightbox как зависимость проекта используя
// npm(ссылка на CDN из твоей прошлой работы больше не нужна).
// Используй свой JavaScript код из предыдущей домашней работы, но 
// выполни рефакторинг с учетом того, что библиотека была установлена 
// через npm(синтаксис import /export).
// Для того чтобы подключить CSS код библиотеки в проект, необходимо 
// добавить еще один импорт, кроме того который описан в документации.

// // Описан в документации
// import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
// import "simplelightbox/dist/simple-lightbox.min.css";



// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const gallery = document.querySelector('ul.gallery');

console.log(gallery);



function galleryThis(photos) {
    return photos.map(photo => 
        `<li class="gallery__item">
   <a class="gallery__link" href="${photo.original}">
      <img class="gallery__image" src="${photo.preview}" alt="${photo.description}" />
   </a>
</li>`
    ).join('');
}

const addGallaryEl = galleryThis(galleryItems);
gallery.innerHTML = addGallaryEl;


 const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        animationSpeed: '250',
        captionPosition: 'bottom',
    });


