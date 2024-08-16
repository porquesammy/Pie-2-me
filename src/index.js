import "./styles/main.scss";
import pie2MeLogo from "./assets/pie-2-me-logo.svg";

// import homeNavBtn from "./assets/nav-home-button.svg";
// import contactNavBtn from "./assets/nav-contact-button.svg";
// import menuNavBtn from "./assets/nav-menu-button.svg";

import smNavPopupBackground from "./assets/sm-nav-bottom-background.svg";
const pie2MeLogoElement = document.querySelector("#header__pie-2-me-logo");
pie2MeLogoElement.src = pie2MeLogo;

// ///* buttons *///
// const smNavHomeBtnElement = document.querySelector('#');
// smNavHomeBtnElement.src = homeNavBtn;

// const smNavContactBtnElement = document.querySelector('#');
// smNavContactBtnElement.src = contactNavBtn;

// const smNavMenuBtnElement = document.querySelector('#');
// smNavMenuBtnElement.src = menuNavBtn;

///* small screen button nav bar elements*///
const smNavPopupBackgroundElement = document.querySelector(
  "nav #nav__sm-bottom-nav-popup img"
);
smNavPopupBackgroundElement.src = smNavPopupBackground;
