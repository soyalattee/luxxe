/* popular 메뉴 슬라이더 */
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

/*scroll 방향으로 상단 메뉴 바 활성&비활성*/ 
let prevScrollpos = window.pageYOffset;

window.onscroll= function(){
  let currentScrollpos = window.pageYOffset;
  if(prevScrollpos > currentScrollpos){
    document.querySelector(".header").classList.add("on");
  }else{
    document.querySelector(".header").classList.remove("on");
  }

  prevScrollpos = currentScrollpos;
}