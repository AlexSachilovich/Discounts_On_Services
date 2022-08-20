const popup = document.querySelector(".popup");
const buttonAutorization = document.querySelector(".authorization__button");
const overlay = document.querySelector(".popup__overlay");
const buttonSpotifyTariff1 = document.querySelector(
  ".button__spotify-tariff-1"
);
const buttonSpotifyTariff2 = document.querySelector(
  ".button__spotify-tariff-2"
);
const buttonSpotifyTariff3 = document.querySelector(
  ".button__spotify-tariff-3"
);

buttonAutorization.addEventListener("click", showPopup);
buttonSpotifyTariff1.addEventListener("click", showPopup);
buttonSpotifyTariff2.addEventListener("click", showPopup);
buttonSpotifyTariff3.addEventListener("click", showPopup);

overlay.addEventListener("click", hiddenPopup);

function showPopup() {
  popup.classList.add("popup-active");
}

function hiddenPopup() {
  popup.classList.remove("popup-active");
}
