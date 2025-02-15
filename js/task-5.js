function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const style = getRandomHexColor();
  body.setAttribute("style", `background-color: ${style}`);
  span.textContent = style;
});
