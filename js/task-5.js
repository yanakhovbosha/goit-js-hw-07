const btn = document.querySelector(".change-color");

const colorEl = document.querySelector(".color");
console.log(colorEl);


btn.addEventListener("click", event => {
  const styleBody = document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = styleBody;
  console.log(event);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
