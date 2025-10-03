let chapter = "";
let page = "";

function jump() {
  let pageNumber = parseInt(document.getElementById("page-number").value, 10);
  
  if (pageNumber < 3) {
    localStorage.setItem("page", document.getElementById("page-number").value);
    
    window.location.href = "/html/story.html";
  } else if (document.getElementById("page-number").value.trim() === "") {
    document.getElementById("page-number").classList.add("invalid-input");
    document.querySelector("#custom-jump span").textContent = "Missing page number";
  } else {
    document.getElementById("page-number").classList.add("invalid-input");
    document.querySelector("#custom-jump span").textContent = "Invalid page number";
  }
}

function inputChange() {
  document.getElementById("page-number").value = document.getElementById("page-number").value.replace(/[^0-9]/g, "");
  
  if (document.getElementById("page-number").value === "") {
    document.getElementById("page-number").classList.remove("invalid-input");
    document.querySelector("#custom-jump span").textContent = "Enter page number :";
  }
}

function showChapterSections() {
  const elem = document.getElementById(chapter);
  if (document.getElementsByClassName(chapter)[0].checked) {
    elem.style.maxHeight = elem.scrollHeight + "px";
  } else {
    elem.style.maxHeight = 0;
  }
}

function jumpViaButton() {
  localStorage.setItem("page", page);
    
    window.location.href = "/html/story.html";
}

