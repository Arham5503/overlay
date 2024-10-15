"use strict";
const model = document.querySelector(".model");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const show = document.querySelectorAll(".show-model");
const remove = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const add = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < show.length; i++) {
  show[i].addEventListener("click", remove);
}
close.addEventListener("click", add);
overlay.addEventListener("click", add);
