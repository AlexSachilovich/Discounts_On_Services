const popup = document.querySelector(".popup");
const buttonAutorization = document.querySelector(".authorization__button");
const buttonStart = document.querySelector(".button--start");
const buttonMobil = document.querySelector(".button__mobil");
const overlay = document.querySelector(".popup__overlay");

buttonAutorization.addEventListener("click", showPopup);
buttonMobil.addEventListener("click", showPopup);
buttonStart.addEventListener("click", showPopup);
overlay.addEventListener("click", hiddenPopup);

function showPopup() {
  popup.classList.add("popup-active");
}

function hiddenPopup() {
  popup.classList.remove("popup-active");
}
