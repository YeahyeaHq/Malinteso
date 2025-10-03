let score = parseInt(localStorage.getItem("page"), 10) || 0;
let ending = "";

let popupButton = document.querySelector("aside input");

function showStory() {
  
  
  document.querySelector("nav>span span").textContent = score;
  
  document.querySelectorAll("main input").forEach(el => {
    el.checked = false;
  });
  
  localStorage.setItem("page", score);
  
  updateChoicePanel();
  
  if (score === 0) {
    document.getElementById("prologue").style.display = "block";
  } else {
    document.getElementById("prologue").style.display = "none";
  }
  
  if (score >= 1) {
    document.getElementById("chapter-one").style.display = "block";
  } else {
    document.getElementById("chapter-one").style.display = "none";
  }
  
  if (score === 1) {
    document.getElementById("TLB-cp-1").style.display = "flex";
  } else {
    document.getElementById("TLB-cp-1").style.display = "none";
  }
  
  if (score === 2) {
    document.getElementById("pp").style.display = "block";
    document.getElementById("TLB-cp-2").style.display = "flex";
  } else {
    document.getElementById("TLB-cp-2").style.display = "none";
    document.getElementById("pp").style.display = "none";
  }
}

function updateChoicePanel() {
  if (document.querySelectorAll("input:checked").length) {
    document.querySelector(".choice-panel p").style.opacity = "1";
    document.querySelector(".choice-panel p").removeAttribute("inert");
  } else {
    document.querySelector(".choice-panel p").style.opacity = "0";
    document.querySelector(".choice-panel p").setAttribute("inert", "");
  }
}

function showHideButton() {
  document.getElementById("hide-button").style.display = "flex";
  
  
  if (popupButton.checked === true) {
    popupButton.checked = false;
  } else {
    popupButton.checked = true;
  }
  
}

function hideButton() {
  let hideButton = document.querySelector("#hide-button button:last-child");
  
  
  
  if (popupButton.checked === false) {
    popupButton.checked = true;
  } else {
    popupButton.checked = false;
  }
  
  if (popupButton.checked === true) {
    document.querySelectorAll(".back-button").forEach(el => {
      el.style.opacity = "0";
    });
    document.querySelector("header").style.opacity = "0";
    document.querySelector("#hide-button button:last-child").textContent = "Show";
    document.querySelector("#hide-button p").textContent = "Back button and menu button will now be visible, you can hide them again by turning this option on.";
  } else {
    document.querySelectorAll(".back-button").forEach(el => {
      el.style.opacity = "1";
    });
    document.querySelector("header").style.opacity = "1";
    document.querySelector("#hide-button button:last-child").textContent = "Hide";
    document.querySelector("#hide-button p").innerHTML = "Back button and menue button will no longer be visible, but they will remain clickable in their original positions. <br /> You can make them visible again by turning this option off.";
  }
  
  if (document.querySelector("#hide-button input").checked === true && popupButton.checked === true) {
    localStorage.setItem("hideButton", true);
  } else if (document.querySelector("#hide-button input").checked === true && popupButton.checked === false) {
    localStorage.setItem("hideButton", false);
  }
  
  closePopup();
}

function showEnding() {
  document.getElementById("endings").style.display = "flex";
  document.getElementById(ending).style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
}

function hideEnding() {
  document.getElementById("ending-1").style.display = "none";
  closePopup();
  document.querySelector("body").style.overflow = "";
}

function showConfirmExit() {
  document.getElementById("confirm-exit").style.display = "flex";
}

function hideConfirmExit() {
  document.getElementById("confirm-exit").style.display = "none";
}

function showResetData() {
  document.getElementById("reset-data").style.display = "flex";
}

function pp() {
  if (localStorage.getItem("hideButton") === "true") {
    popupButton.checked = true;
  } else {
    popupButton.checked = false;
  }
  
  if (popupButton.checked === true) {
    document.querySelectorAll(".back-button").forEach(el => {
      el.style.opacity = "0";
    });
    document.querySelector("header").style.opacity = "0";
    document.querySelector("#hide-button button:last-child").textContent = "Show";
    document.querySelector("#hide-button p").textContent = "Back button and menu button will now be visible, you can hide them again by turning this option on.";
  } else {
    document.querySelectorAll(".back-button").forEach(el => {
      el.style.opacity = "1";
    });
    document.querySelector("header").style.opacity = "1";
    document.querySelector("#hide-button button:last-child").textContent = "Hide";
    document.querySelector("#hide-button p").innerHTML = "Back button and menue button will no longer be visible, but they will remain clickable in their original positions. <br /> You can make them visible again by turning this option off.";
  }
}

function closePopup() {
  document.querySelectorAll(".popup-panel").forEach(el => {
    el.style.display = "none";
  });
}

function resetData() {
  localStorage.clear();
  window.location.href = "/index.html";
}


window.onload = function() {
  showStory();
  pp();
};