function showSideBar() {
  document.querySelector("aside nav").style.right = "0";
  document.querySelector("aside").style.pointerEvents = "auto";
  document.querySelector("aside").removeAttribute("inert");
  document.querySelector("aside button").style.pointerEvents = "auto";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("header button").style.visibility = "hidden";
}

function hideSideBar() {
  document.querySelector("aside nav").style.right = "calc(-100% - 13px)";
  document.querySelector("aside").style.pointerEvents = "none";
  document.querySelector("aside").setAttribute("inert", "");
  document.querySelector("aside button").style.pointerEvents = "none";
  document.querySelector("body").style.overflow = "";
  document.querySelector("header button").style.visibility = "";
}