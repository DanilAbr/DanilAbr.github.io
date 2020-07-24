var write = document.querySelector(".contacts-btn");

var popup = document.querySelector(".modal-message");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".message-form");
var personName = popup.querySelector("#message-name");
var email = popup.querySelector("#message-email");
var text = popup.querySelector("#message-text");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("personName");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    personName.value = storage;
    email.focus();
  } else {
    personName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  personName.classList.remove("input-background");
  email.classList.remove("input-background");
  text.classList.remove("input-background");
});

form.addEventListener("submit", function (evt) {
  if (!personName.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    if (!personName.value) {
      personName.classList.add("input-background");
    }
    if (!email.value) {
      email.classList.add("input-background");
    }
    if (!text.value) {
      text.classList.add("input-background");
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("personName", personName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      personName.classList.remove("input-background");
      email.classList.remove("input-background");
      text.classList.remove("input-background");
    }
  }
});
