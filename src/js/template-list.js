import itemsTemplate from '../templates/menu.hbs';
import itemsMenu from '../menu.json';
import '../styles.css';
// console.log(itemsMenu);
// console.log(itemsTemplate);

const markup = itemsTemplate(itemsMenu);
// console.log(markup);
const galleryRef = document.querySelector('.js-menu');
// console.log(galleryRef);
galleryRef.innerHTML = markup;
