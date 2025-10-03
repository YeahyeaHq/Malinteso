if (parseInt(localStorage.getItem("page")) > 0)  {
  document.getElementById("st-txt").textContent = "continue";
} else {
  document.getElementById("st-txt").textContent = "start";
}