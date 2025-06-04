//Store a reference to the <h1> in a variable.
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Mozilla_Firefox_3.5_logo.png") {
    myImage.setAttribute("src", "images/calculator-791833_512.jpg");
    myImage.setAttribute("alt", "Calculator Image");
  } else {
    myImage.setAttribute("src", "images/Mozilla_Firefox_3.5_logo.png");
  }
});

//adding a personalized message to the heading, store the users name in the browser's localstorage API, and change user when a button is clicked.// myImage.addEventListener('mouseover', () => {

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
