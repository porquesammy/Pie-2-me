import "./styles/main.scss";
import pie2MeLogo from "./assets/pie-2-me-logo.svg";
import favItemImg_01 from "./assets/fav-item-1.png";
import favItemImg_02 from "./assets/fav-item-2.avif";
import favItemImg_03 from "./assets/fav-item-3.jpg";
import favItemImg_04 from "./assets/fav-item-4.jpg";

import homeNavBtn from "./assets/home-btn.svg";
import contactNavBtn from "./assets/contact-btn.svg";
import menuNavBtn from "./assets/menu-btn.svg";

const pie2MeLogoElement = document.querySelector("#header__pie-2-me-logo");
pie2MeLogoElement.src = pie2MeLogo;

// // ///* buttons *///
const navHomeBtnElement = document.querySelector('#bg-screen-home-btn img');
navHomeBtnElement.src = homeNavBtn;

const navContactBtnElement = document.querySelector('#bg-screen-contact-btn img');
navContactBtnElement.src = contactNavBtn;

const bgNavMenuBtnElement = document.querySelector('#bg-screen-menu-btn img');
bgNavMenuBtnElement.src = menuNavBtn;


///* favorite items pictures *///
const firstFavoriteItemElement = document.querySelector('#fav-item-1 .menuCard--picture');
firstFavoriteItemElement.style.backgroundImage = `url(${favItemImg_01})`;

const secondFavoriteItemElement = document.querySelector('#fav-item-2 .menuCard--picture');
secondFavoriteItemElement.style.backgroundImage = `url(${favItemImg_02})`;


const thirdFavoriteItemElement = document.querySelector('#fav-item-3 .menuCard--picture');
thirdFavoriteItemElement.style.backgroundImage = `url(${favItemImg_03})`;

const fourthFavoriteItemElement = document.querySelector('#fav-item-4 .menuCard--picture');
fourthFavoriteItemElement.style.backgroundImage = `url(${favItemImg_04})`;
