let menu = document.querySelector(".header__navbutton");
let nav = document.querySelector(".header__nav");
let clicked = false;

menu.onclick = () => {
  if (!clicked) {
    nav.style.top = 60 + "px";
    clicked = true;
  } else {
    nav.style.top = -400 + "px";
    clicked = false;
  }
};

let darkmod = document.querySelector(".header__darkmode");
let darkmodedot = document.querySelector(".header__darkmode-dot");
console.log(darkmodedot);
let clicked2 = false;
let body = document.querySelector("body");
darkmod.onclick = () => {
  if (!clicked2) {
    darkmodedot.style.right = 17 + "px";
    darkmodedot.style.backgroundColor = "white";
    clicked2 = true;
  } else {
    darkmodedot.style.right = 2 + "px";
    darkmodedot.style.backgroundColor = "black";
    clicked2 = false;
  }
  body.classList.remove("green");
  body.classList.remove("blue");
  body.classList.remove("red");
  red.classList.remove("active");
  blue.classList.remove("active");
  green.classList.remove("active");
  yellow.classList.remove("active");
  darkmod.classList.toggle("dark");
  body.classList.toggle("dark");
};

let choose = document.querySelector(".color-chooser__slide-btn");
let hidden = true;
let chooser = document.querySelector(".color-chooser");
choose.onclick = () => {
  if (hidden) {
    chooser.style.left = 0;
    hidden = false;
  } else {
    chooser.style.left = -135 + "px";
    hidden = true;
  }
};

let yellow = document.querySelector(".color-chooser__yellow");
let green = document.querySelector(".color-chooser__green");
let blue = document.querySelector(".color-chooser__blue");
let red = document.querySelector(".color-chooser__red");

yellow.onclick = () => {
  darkmodedot.style.right = 2 + "px";
  darkmodedot.style.backgroundColor = "black";
  clicked2 = false;
  body.classList.remove("dark");
  body.classList.remove("green");
  body.classList.remove("blue");
  body.classList.remove("red");
  yellow.classList.add("active");
  red.classList.remove("active");
  blue.classList.remove("active");
  green.classList.remove("active");
};
green.onclick = () => {
  darkmodedot.style.right = 2 + "px";
  darkmodedot.style.backgroundColor = "black";
  clicked2 = false;
  body.classList.remove("dark");
  body.classList.add("green");
  body.classList.remove("blue");
  body.classList.remove("red");
  green.classList.add("active");
  red.classList.remove("active");
  blue.classList.remove("active");
  yellow.classList.remove("active");
};
blue.onclick = () => {
  darkmodedot.style.right = 2 + "px";
  darkmodedot.style.backgroundColor = "black";
  clicked2 = false;
  body.classList.remove("dark");
  body.classList.remove("green");
  body.classList.add("blue");
  body.classList.remove("red");
  blue.classList.add("active");
  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");
};
red.onclick = () => {
  darkmodedot.style.right = 2 + "px";
  darkmodedot.style.backgroundColor = "black";
  clicked2 = false;
  body.classList.remove("dark");
  body.classList.remove("green");
  body.classList.remove("blue");
  body.classList.add("red");
  red.classList.add("active");
  yellow.classList.remove("active");
  blue.classList.remove("active");
  green.classList.remove("active");
};
