const buttonNetflixPlan6Month = document.querySelector(".button__6m");
const buttonNetflixPlan12Month = document.querySelector(".button__12m");
const blockBasicNetflix6m = document.querySelector(
  ".tariffs__block_netflix_6m"
);
const blockBasicNetflix12m = document.querySelector(
  ".tariffs__block_netflix_12m"
);

function changeTariff12m() {
  blockBasicNetflix12m.classList.add("tariffs__block_netflix_12m--active");
  blockBasicNetflix6m.classList.add("tariffs__block_netflix_6m--not-active");
  buttonNetflixPlan12Month.classList.add("button__12m--active");
  buttonNetflixPlan6Month.classList.add("button__6m--notActive");
}

buttonNetflixPlan12Month.addEventListener("click", changeTariff12m);

function changeTariff6m() {
  blockBasicNetflix12m.classList.remove("tariffs__block_netflix_12m--active");
  blockBasicNetflix6m.classList.remove("tariffs__block_netflix_6m--not-active");
  buttonNetflixPlan12Month.classList.remove("button__12m--active");
  buttonNetflixPlan6Month.classList.remove("button__6m--notActive");
}

buttonNetflixPlan6Month.addEventListener("click", changeTariff6m);
