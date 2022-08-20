const menubuttonHeaderDropdown = document.querySelector(".menu__link-dropdown");
const popUpHeaderSubscriptions = document.querySelector(".sub-menu__list");
const wrapper = document.querySelector(".containerWrapper");

menubuttonHeaderDropdown.addEventListener(
  "click",
  openPopUpHeaderSubscriptions
);
wrapper.addEventListener("click", closePopUpHeaderSubscriptions);

function openPopUpHeaderSubscriptions() {
  popUpHeaderSubscriptions.classList.toggle("sub-menu__list--active");
}

function closePopUpHeaderSubscriptions() {
  popUpHeaderSubscriptions.classList.remove("sub-menu__list--active");
}

const buttonHeaderDropdown = document.querySelector(
  ".menu-language__link--dropdown"
);
const popUpHeaderlanguage = document.querySelector(".sub-menu-language__list");

buttonHeaderDropdown.addEventListener("click", openPopUpHeaderLanguage);

function openPopUpHeaderLanguage() {
  popUpHeaderlanguage.classList.toggle("sub-menu-language__list--active");
}

function closePopUpHeaderSubscriptions() {
  popUpHeaderSubscriptions.classList.remove("sub-menu__list--active");
  popUpHeaderlanguage.classList.remove("sub-menu-language__list--active");
}
