const sliderContainer = document.querySelector(".slider-container");
const sliderLeft = document.querySelector(".left-slide");
const sliderRight = document.querySelector(".right-slide");
const buttonUp = document.querySelector(".up-button");
const buttonDown = document.querySelector(".down-button");
const slidesLength = sliderRight.querySelectorAll("div").length;

sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
buttonUp.addEventListener("click", () => changeSlide("up"));
buttonDown.addEventListener("click", () => changeSlide("down"));
