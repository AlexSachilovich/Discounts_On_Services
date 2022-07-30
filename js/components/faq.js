const buttonFaq = document.querySelector(".button__faq");
const popUpFaq = document.querySelector(".faq__block__active");

buttonFaq.addEventListener("click", openPopUp1);

function openPopUp1() {
  popUpFaq.classList.toggle("faq__block__active--open");
}
