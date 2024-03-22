// const nav = document.querySelector('')
// console.log("dsads");s
const open = window.document.getElementsByClassName("bar");
const nav = document.querySelector(".menu_nav");
const close = window.document.getElementsByClassName("nav_close");
// console.log(open);

open[0].addEventListener("click", () => {
  nav.classList.toggle("active");
  console.log("worked");
});

close[0].addEventListener("click", () => {
  nav.classList.remove("active");
});
