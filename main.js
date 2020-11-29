const slider = document.querySelector(".slider");
const windowWidth = window.innerWidth;
const scrollLeft = windowWidth / 2;
const sliderCards = document.querySelectorAll(".slider__card");
slider.addEventListener("scroll", () => {
  for (let num = 0; num < sliderCards.length; num++) {
    const card = sliderCards[num];
    const eleLeft = card.getBoundingClientRect().left;
    if (scrollLeft - 110 <= eleLeft && eleLeft <= scrollLeft + 60) {
      sliderCards.forEach((target) => removeActive(target));
      card.classList.add("active");
    }
  }
});
function removeActive(element) {
  element.classList.remove("active");
}
