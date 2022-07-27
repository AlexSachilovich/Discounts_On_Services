const buttonFaq = document.querySelector('.button__faq');
const popUpFaq = document.querySelector('.faq__block__active');

buttonFaq.addEventListener('click', openPopUp);

function openPopUp() {
    popUpFaq.classList.toggle('faq__block__active--open')
}
