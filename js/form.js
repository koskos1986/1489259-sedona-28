var formButton = document.querySelector(".button-form");
var findForm = document.querySelector(".find-form");
var findButton = document.querySelector(".button-find");
var arrivalDate = findForm.querySelector("[name=checkout-date]");
var checkoutDate = findForm.querySelector("[name=arrival-date]");
var adultsNumber = findForm.querySelector("[name=number-of-adults]");
var childrenNumber = findForm.querySelector("[name=number-of-children]");

var isStorageSupport = true;
var storage = "";

findForm.classList.add("visually-hidden");

try {
  storage = localStorage.getItem("arrivalDate");
} catch (err) {
  isStorageSupport = false;
}

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (findForm.classList.contains("visually-hidden")) {
    findForm.classList.remove("visually-hidden");
    findForm.classList.add("form-show");
  } else {
    findForm.classList.remove("form-show");
    findForm.classList.remove("find-form-error");
    findForm.classList.add("visually-hidden");
  }

  if (storage) {
    arrivalDate.value = storage;
    checkoutDate.focus();
  } else {
    arrivalDate.focus();
  }
});

findForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !adultsNumber.value) {
    evt.preventDefault();
    findForm.classList.remove("find-form-error");
    findForm.offsetWidth = findForm.offsetWidth;
    findForm.classList.add("find-form-error");
    arrivalDate.style.outline = "3px solid rgba(147, 137, 209, 0.9)";
    adultsNumber.style.outline = "3px solid rgba(147, 137, 209, 0.9)";
  } else {
    localStorage.setItem("arrivalDate", arrivalDate.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (findForm.classList.contains("form-show")) {
      evt.preventDefault();
      findForm.classList.remove("form-show");
      findForm.classList.remove("find-form-error");
      findForm.classList.add("visually-hidden");
    }
  }
});

