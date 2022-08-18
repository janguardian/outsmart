const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".header__menu");
const hideMenuButton = menu.querySelector(".menu__back-button");
const menuOverlay = menu.querySelector(".menu__overlay");
const feedbackForm = document.querySelector(".feedback__form");
//const emailInput = feedbackForm.querySelector("");
const messageInput = feedbackForm.querySelector(".feedback__message");

const openMenu = () => {
  menu.classList.add("menu_opened");
};
const closeMenu = () => {
  menu.classList.remove("menu_opened")
};
const autoHeightSet = (element) => {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + 4 + "px";
};

menuButton.addEventListener("click", () => {
  openMenu();
});
hideMenuButton.addEventListener("click", () => {
  closeMenu();
});
menuOverlay.addEventListener("click", () => {
  closeMenu();
});
