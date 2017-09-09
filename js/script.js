"use strict";

(function() {
  var link = document.querySelector(".feedback"),
      popup = document.querySelector(".modal-window"),
      close = document.querySelector(".modal-close"),
      background = document.querySelector(".overlay"),
      name = popup.querySelector("[name=name]"),
      form = popup.querySelector("form");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-window-show");
    background.classList.add("overlay-show");
    name.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-window-show");
    background.classList.remove("overlay-show");
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

})();
