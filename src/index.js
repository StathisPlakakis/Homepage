import './style.css';
import headerImageZoom from './assets/images&icons/headerZoom.jpg';

const headerImg = document.querySelector('.header-img');
headerImg.style.backgroundImage = `url(${headerImageZoom})`;
headerImg.style.backgroundPosition = 'center';
headerImg.style.backgroundSize = 'contain';
headerImg.style.backgroundRepeat = 'no-repeat';