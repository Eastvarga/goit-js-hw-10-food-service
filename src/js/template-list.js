import itemsTemplate from '../templates/menu.hbs';
import itemsMenu from '../menu.json';
import '../sass/styles.scss';
// console.log(itemsMenu);
// console.log(itemsTemplate);

const markup = itemsTemplate(itemsMenu);
// console.log(markup);
const galleryRef = document.querySelector('.js-menu');
// console.log(galleryRef);
galleryRef.insertAdjacentHTML('afterbegin', markup);
// galleryRef.innerHTML = markup;
// console.dir(galleryRef);
