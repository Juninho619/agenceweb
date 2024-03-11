const darkModeButton = document.querySelector(".fa-solid");
function myFunction() {
  let body = document.querySelector("body");
  body.classList.toggle("darkbody");

  let header = document.querySelector("header");
  header.classList.toggle("darkheader");

  let darkStart = document.querySelector(".main-start");
  darkStart.classList.toggle("main-start-button-dark");

  let darkButtonHeader = document.querySelector("header-up-button");
  darkButtonHeader = document.querySelector(".header-up-button-dark");

  if (darkModeButton.classList == "fa-solid fa-moon fa-3x") {
    darkModeButton.setAttribute("class", "fa-regular fa-sun fa-3x");
  } else darkModeButton.setAttribute("class", "fa-solid fa-moon fa-3x");
}
darkModeButton.addEventListener("click", myFunction);
