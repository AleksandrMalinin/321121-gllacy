"use strict";

(function() {
  var link = document.querySelector(".feedback"),
      popup = document.querySelector(".modal-window"),
      close = document.querySelector(".modal-close"),
      background = document.querySelector(".overlay"),
      name = popup.querySelector("[name=name]"),
      form = popup.querySelector("form"),
      email = popup.querySelector("[name=email]"),
      field = popup.querySelector("[name=field]"),
      storageName = localStorage.getItem("name"),
      storageEmail = localStorage.getItem("email");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-window-show");
    background.classList.add("overlay-show");
    if (storageName && storageEmail) {
      name.value = storageName;
      email.value = storageEmail;
      field.focus();
    } else {
      name.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-window-show");
    background.classList.remove("overlay-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !field.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  })

})();
