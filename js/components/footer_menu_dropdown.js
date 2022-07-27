

const buttonFooterDropdown = document.querySelector('.footer-contacts__menu-language__link--dropdown');
const popUplanguage = document.querySelector('.footer-contacts__sub-menu-language__list');


buttonFooterDropdown.addEventListener('click', openPopUpLanguage);

function openPopUpLanguage() {
    popUplanguage.classList.toggle ('footer-contacts__sub-menu-language__list--active')
}