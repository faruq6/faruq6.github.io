console.log("hello");

/*update heading with user' name, store users name in local storage. if new user visits, ask him / her to enter their name.*/
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

function setUserName() {
  myName = prompt("Please eneter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool  , ${myName}`;
}
storedName = localStorage.getItem("name");
if (storedName !== localStorage.getItem("name") || storedName === null) {
  setUserName();
} else {
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.addEventListener("click", () => {
  setUserName();
});
