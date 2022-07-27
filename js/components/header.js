

const menubuttonHeaderDropdown = document.querySelector('.menu__link-dropdown');
const popUpHeaderSubscriptions = document.querySelector('.sub-menu__list');


menubuttonHeaderDropdown.addEventListener('click', openPopUpHeaderSubscriptions);

function openPopUpHeaderSubscriptions() {
    popUpHeaderSubscriptions.classList.toggle ('sub-menu__list--active')
}






const buttonHeaderDropdown = document.querySelector('.menu-language__link--dropdown');
const popUpHeaderlanguage = document.querySelector('.sub-menu-language__list');


buttonHeaderDropdown.addEventListener('click', openPopUpHeaderLanguage);

function openPopUpHeaderLanguage() {
    popUpHeaderlanguage.classList.toggle ('sub-menu-language__list--active')
}