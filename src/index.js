import './style.css';
import headerImage from './assets/images&icons/header.jpg';
import headerImageZoom from './assets/images&icons/headerZoom.jpg';

const headerImg = document.querySelector('.header-img');
const picture = document.createElement('picture');
const source = document.createElement('source');
source.srcset = headerImage;
source.media = '(min-width: 500px)';
picture.appendChild(source);
const img = document.createElement('img');
img.src = headerImageZoom;
picture.appendChild(img);
headerImg.prepend(picture);
