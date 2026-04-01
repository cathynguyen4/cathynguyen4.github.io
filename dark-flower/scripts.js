const darkModeButton = document.querySelector("#darkModeButton");
const body = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  body.classList.toggle("darkMode");

  if (body.classList.contains("darkMode")) {
    darkModeButton.textContent = "Light Mode";
  } else {
    darkModeButton.textContent = "Dark Mode";
  }
});