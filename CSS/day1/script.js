let d = document.getElementById("container");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 255 + 1);
  let randomNum1 = Math.floor(Math.random() * 255 + 1);
  let randomNum2 = Math.floor(Math.random() * 255 + 1);
  d.style.backgroundColor = `rgb(${randomNum},${randomNum1},${randomNum2})`;
  btn.style.backgroundColor= `rgb(${randomNum1},${randomNum},${randomNum2})`
});