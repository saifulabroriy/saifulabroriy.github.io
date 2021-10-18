let mg1 = document.querySelector(".mg-1");
let mg2 = document.querySelector(".mg-2");
let bird = document.querySelector(".bird");
let fg = document.querySelector(".fg-intro");
let h2 = document.querySelector(".intro h2");
let tambahan = document.querySelector(".tambahan");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  fg.style.transform = `translate(0, ${-value * 0.7}px)`;
  mg1.style.transform = `translate(0, ${-value * 0.1}px)`;
  mg2.style.transform = `translate(0, ${-value * 0.2}px)`;
  bird.style.transform = `translate(${value * 0.5}px, 0)`;
  h2.style.transform = `translate(0, ${value * 0.2}px)`;
});

function myFunction() {
  document.querySelector(".nav-menu").classList.toggle("show");
  document.querySelector("header").classList.toggle("clicked")
};