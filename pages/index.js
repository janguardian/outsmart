import "./index.css";

//'get in touch' button to 'feedback' section
let getInTouchButton = document.querySelector(".button_size_m");

getInTouchButton.addEventListener("click", () => {
  location.href = "#feedback";
});

// footer buttons to different sections
let footerButtons = document.querySelectorAll(".footer__link");

footerButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    location.href = e.target.id;
  });
});

// textarea sizes (своровано, но адаптировано)
let textarea = document.querySelector(".form__item_type_message");

textarea.addEventListener("input", autoResize, false);

function autoResize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
