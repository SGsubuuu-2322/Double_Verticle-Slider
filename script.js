const sliderContainer = document.querySelector(".slider-container");
const sliderLeft = document.querySelector(".left-slide");
const sliderRight = document.querySelector(".right-slide");
const buttonUp = document.querySelector(".up-button");
const buttonDown = document.querySelector(".down-button");
const slidesLength = sliderRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
buttonUp.addEventListener("click", () => changeSlide("up"));
buttonDown.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  sliderRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }PX)`;
  sliderLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }PX)`;
};
