// Javascript that is used in events

//ELEMENT PATH
let applyButton = document.getElementsByClassName("event-apply-button");
const applyButtonForm = document.querySelector(".event-apply-button-form");
const cancelFormButton = document.querySelector(".cancel-form-button");
const applyForm = document.querySelector(".apply-form");
//VARIABLES
let visible = false;

for (let i = 0; i < applyButton.length; i++) {
  applyButton[i].addEventListener("click", showApplyForm);
}
applyButtonForm.addEventListener("click", closeApplyForm);
cancelFormButton.addEventListener("click", closeApplyForm);

function showApplyForm() {
  if (visible === false) {
    applyForm.classList.add("open");
    visible = true;
  }
}

function closeApplyForm() {
  if (visible === true) {
    applyForm.classList.remove("open");
    visible = false;
  }
}
