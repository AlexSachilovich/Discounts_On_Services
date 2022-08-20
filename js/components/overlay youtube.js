const popup = document.querySelector(".popup");
const buttonAutorization = document.querySelector(".authorization__button");
const overlay = document.querySelector(".popup__overlay");
const buttonYoutubeTariff1 = document.querySelector(
  ".button__youtube-tariff-1"
);
const buttonYoutubeTariff11 = document.querySelector(
  ".button__youtube-tariff-11"
);

buttonAutorization.addEventListener("click", showPopup);
buttonYoutubeTariff1.addEventListener("click", showPopup);
buttonYoutubeTariff11.addEventListener("click", showPopup);

overlay.addEventListener("click", hiddenPopup);

function showPopup() {
  popup.classList.add("popup-active");
}

function hiddenPopup() {
  popup.classList.remove("popup-active");
}
