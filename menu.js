const menu = document.querySelector(".menu");
const home = document.querySelector(".menu__home");
const board = document.querySelector(".menu__board");
const like = document.querySelector(".menu__like");
const profile = document.querySelector(".menu__profile");

home.addEventListener("click",(e)=>{
    location.href = "./main.html"
})
profile.addEventListener("click",(e)=>{
    location.href = "./profile.html"
})