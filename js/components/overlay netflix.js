const popup = document.querySelector(".popup");
const buttonAutorization = document.querySelector(".authorization__button");
const overlay = document.querySelector(".popup__overlay");
const buttonNetflixTariff1 = document.querySelector(
  ".button__netflix-tariff-1"
);
const buttonNetflixTariff11 = document.querySelector(
  ".button__netflix-tariff-11"
);
const buttonNetflixTariff2 = document.querySelector(
  ".button__netflix-tariff-2"
);
const buttonNetflixTariff22 = document.querySelector(
  ".button__netflix-tariff-22"
);
const buttonNetflixTariff3 = document.querySelector(
  ".button__netflix-tariff-3"
);
const buttonNetflixTariff33 = document.querySelector(
  ".button__netflix-tariff-33"
);

buttonAutorization.addEventListener("click", showPopup);
buttonNetflixTariff1.addEventListener("click", showPopup);
buttonNetflixTariff11.addEventListener("click", showPopup);
buttonNetflixTariff2.addEventListener("click", showPopup);
buttonNetflixTariff22.addEventListener("click", showPopup);
buttonNetflixTariff3.addEventListener("click", showPopup);
buttonNetflixTariff33.addEventListener("click", showPopup);

overlay.addEventListener("click", hiddenPopup);

function showPopup() {
  popup.classList.add("popup-active");
}

function hiddenPopup() {
  popup.classList.remove("popup-active");
}
