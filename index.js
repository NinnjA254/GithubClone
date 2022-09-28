/** @format */

let switchContainer = document.getElementById("switchContainer");
let swtch = document.getElementById("switch");
let body = document.getElementsByTagName("body")[0];

let darkMode = false;

switchContainer.onclick = () => {
  if (darkMode === false) {
    swtch.style.marginLeft = "15px";
    body.style.backgroundColor = "#010409";
    darkMode = true;
  } else {
    swtch.style.marginLeft = "0px";
    body.style.backgroundColor = "white";
    darkMode = false;
  }
};
