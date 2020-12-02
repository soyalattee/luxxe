/** product */

const certificate = document.querySelector(".certificate");
const shadow = document.querySelector(".shadow");
certificate.addEventListener("click", (event) => {
  certificate.classList.toggle("on");
  shadow.classList.toggle("on");
});

const chatIcon = document.querySelector(".chat__icon");
const chatClose = document.querySelector(".chat__close");
const chatBox = document.querySelector(".chatbox");
chatIcon.addEventListener("click", (e) => {
  chatBox.classList.add("on");
  shadow.classList.toggle("on");
});

chatClose.addEventListener("click", (e) => {
  chatBox.classList.remove("on");
  shadow.classList.remove("on");
});

const close = document.querySelector(".close");

close.addEventListener("click", (e) => {
  console.log("ge");
  location.href = "./main.html";
});
