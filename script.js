"use strict";
// Ẩn hiện thông tin Job
const btn = document.querySelectorAll(".btnView");
const removeHidden = document.querySelectorAll(".rowInfo");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (removeHidden[i].classList.contains("hidden")) {
      removeHidden[i].classList.remove("hidden");
      btn[i].innerHTML = `<i class="fa-solid fa-caret-up"></i> VIEW LESS`;
    } else {
      btn[
        i
      ].innerHTML = `<i class="fa-sharp fa-solid fa-caret-down"></i> VIEW MORE`;
      removeHidden[i].classList.add("hidden");
    }
  });
}
// Ẩn thông tin cá nhân
let email = document.querySelector(".input-email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
document.querySelector(".btnSubmit").addEventListener("click", function () {
  if (!regex.test(email.value)) {
    alert("Hay nhap dia chi email hop le.");
  } else {
    document.querySelector(".cover").classList.add("hidden");
    document.querySelector(".right").classList.remove("hidden");
  }
});
