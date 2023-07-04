let form = document.querySelector("form");
let first = document.querySelector(".first").value.trim();
let second = document.querySelector(".second").value.trim();
let email = document.querySelector(".email").value.trim();
let pass = document.querySelector(".pass").value.trim();
let firster = document.querySelector(".first");
let seconder = document.querySelector(".second");
let emailed = document.querySelector(".email");
let password = document.querySelector(".pass");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let text = document.querySelector(".text");

form.addEventListener("submit", e => {
  e.preventDefault();
  validator();
});

function setError(element, message) {
  let parent = element.parentElement;
  let p = parent.querySelector("p");
  p.innerText = message;
  p.style.display = "block";
  let icon = parent.querySelector("svg");
  icon.style.display = "inline";

}

function noError(element) {
  let parent = element.parentElement;
  let svg = parent.querySelector("svg");
  let pas = parent.querySelector("p");
  pas.style.display = "none";
  svg.style.display = "none";
}

function validator() {
  if (first === "") {
    setError(firster, "First Name Cannot Be Empty");
  } else {
    noError(firster);
  }

  if (second === "") {
    setError(seconder, "Last Name Cannot Be Empty");
  } else {
    noError(seconder);
  }

  if (email === "") {
    setError(emailed, "Email Cannot Be Empty");
  } else if (!emailRegex.test(email)) {
    setError(emailed, "Invalid Email Format");
  } else {
    noError(emailed);
  }

  if (pass === "") {
    setError(password, "Password Cannot Be Empty");
  } else {
    noError(password);
  }
}
