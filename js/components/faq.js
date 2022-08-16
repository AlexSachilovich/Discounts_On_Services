const buttonFaq = document.querySelector(".button__faq");
const buttonFaq2 = document.querySelector(".button__faq-2");
const buttonFaq3 = document.querySelector(".button__faq-3");
const buttonFaq4 = document.querySelector(".button__faq-4");
const buttonFaq5 = document.querySelector(".button__faq-5");

const popUpFaq = document.querySelector(".faq__block__active");
const popUpFaq2 = document.querySelector(".faq__block__active-2");
const popUpFaq3 = document.querySelector(".faq__block__active-3");
const popUpFaq4 = document.querySelector(".faq__block__active-4");
const popUpFaq5 = document.querySelector(".faq__block__active-5");

buttonFaq.addEventListener("click", openPopUp);
buttonFaq2.addEventListener("click", openPopUp2);
buttonFaq3.addEventListener("click", openPopUp3);
buttonFaq4.addEventListener("click", openPopUp4);
buttonFaq5.addEventListener("click", openPopUp5);

function openPopUp() {
  popUpFaq.classList.toggle("faq__block__active--open");
}

function openPopUp2() {
  popUpFaq2.classList.toggle("faq__block__active--open");
}

function openPopUp3() {
  popUpFaq3.classList.toggle("faq__block__active--open");
}

function openPopUp4() {
  popUpFaq4.classList.toggle("faq__block__active--open");
}

function openPopUp5() {
  popUpFaq5.classList.toggle("faq__block__active--open");
}
