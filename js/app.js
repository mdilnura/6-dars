const darkLight = document.getElementById("sun");
darkLight.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    darkLight.src = "/images/moon.png";
  } else {
    darkLight.src = "/images/Sun.png";
  }
  document.body.classList.toggle("light");
});
