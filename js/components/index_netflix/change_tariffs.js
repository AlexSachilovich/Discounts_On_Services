const buttonNetflixPlan6Month = document.querySelector(".button__6m");
const buttonNetflixPlan12Month = document.querySelector(".button__12m");
const blockBasicNetflix6m = document.querySelector(
  ".tariffs__block_netflix_basic_6m"
);
const blockBasicNetflix12m = document.querySelector(
  ".tariffs__block_netflix_basic_12m"
);

function changeTariff12mBasic() {
  blockBasicNetflix12m.classList.add(
    "tariffs__block_netflix_basic_12m--active"
  );
  blockBasicNetflix6m.classList.add(
    "tariffs__block_netflix_basic_6m--not-active"
  );
  buttonNetflixPlan12Month.classList.add("button__12m--active");
  buttonNetflixPlan6Month.classList.add("button__6m--notActive");
}

buttonNetflixPlan12Month.addEventListener("click", changeTariff12mBasic);

function changeTariff6mBasic() {
  blockBasicNetflix12m.classList.remove(
    "tariffs__block_netflix_basic_12m--active"
  );
  blockBasicNetflix6m.classList.remove(
    "tariffs__block_netflix_basic_6m--not-active"
  );
  buttonNetflixPlan12Month.classList.remove("button__12m--active");
  buttonNetflixPlan6Month.classList.remove("button__6m--notActive");
}

buttonNetflixPlan6Month.addEventListener("click", changeTariff6mBasic);

const blockStandartNetflix6m = document.querySelector(
  ".tariffs__block_netflix_standart_6m"
);
const blockStandartNetflix12m = document.querySelector(
  ".tariffs__block_netflix_standart_12m"
);

function changeTariff12mStandart() {
  blockStandartNetflix12m.classList.add(
    "tariffs__block_netflix_standart_12m--active"
  );
  blockStandartNetflix6m.classList.add(
    "tariffs__block_netflix_standart_6m--not-active"
  );
  buttonNetflixPlan12Month.classList.add("button__12m--active");
  buttonNetflixPlan6Month.classList.add("button__6m--notActive");
}

buttonNetflixPlan12Month.addEventListener("click", changeTariff12mStandart);

function changeTariff6mStandart() {
  blockStandartNetflix12m.classList.remove(
    "tariffs__block_netflix_standart_12m--active"
  );
  blockStandartNetflix6m.classList.remove(
    "tariffs__block_netflix_standart_6m--not-active"
  );
  buttonNetflixPlan12Month.classList.remove("button__12m--active");
  buttonNetflixPlan6Month.classList.remove("button__6m--notActive");
}

buttonNetflixPlan6Month.addEventListener("click", changeTariff6mStandart);

const blockPremiumNetflix6m = document.querySelector(
  ".tariffs__block_netflix_premium_6m"
);
const blockPremiumNetflix12m = document.querySelector(
  ".tariffs__block_netflix_premium_12m"
);

function changeTariff12mPremium() {
  blockPremiumNetflix12m.classList.add(
    "tariffs__block_netflix_premium_12m--active"
  );
  blockPremiumNetflix6m.classList.add(
    "tariffs__block_netflix_premium_6m--not-active"
  );
  buttonNetflixPlan12Month.classList.add("button__12m--active");
  buttonNetflixPlan6Month.classList.add("button__6m--notActive");
}

buttonNetflixPlan12Month.addEventListener("click", changeTariff12mPremium);

function changeTariff6mPremium() {
  blockPremiumNetflix12m.classList.remove(
    "tariffs__block_netflix_premium_12m--active"
  );
  blockPremiumNetflix6m.classList.remove(
    "tariffs__block_netflix_premium_6m--not-active"
  );
  buttonNetflixPlan12Month.classList.remove("button__12m--active");
  buttonNetflixPlan6Month.classList.remove("button__6m--notActive");
}

buttonNetflixPlan6Month.addEventListener("click", changeTariff6mPremium);
