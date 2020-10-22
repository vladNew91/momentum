const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

function showTime() {
  let today = new Date(),
    day = today.getDay(),
    dayNumber = today.getDate(),
    month = today.getMonth(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // //set am or pm
  // const amPm = hour >= 12 ? "PM" : "AM";

  //output time
  time.innerHTML = `${day}<span> </span>${dayNumber}<span> </span>${month}<span> </span>${addZero(
    hour
  )}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

//add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//sert bg and greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  //greeting
  if (hour > 6 && hour < 12) {
    greeting.textContent = "Good morning";
    document.body.style.backgroundImage = 'url("images/morning/01.jpg")';
  } else if (hour > 12 && hour < 18) {
    greeting.textContent = "Good afternoon";
    document.body.style.backgroundImage = 'url("images/day/01.jpg")';
  } else if (hour > 18 && hour < 0) {
    greeting.textContent = "Good evening";
    document.body.style.backgroundImage = 'url("images/evening/01.jpg")';
  } else {
    greeting.textContent = "Good night";
    document.body.style.backgroundImage = 'url("images/night/01.jpg")';
    document.body.classList.add("change__color");
  }
}

//get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//set name
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.key == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//get focus
function getfocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//set focus
function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.key == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//run
showTime();
setBgGreet();
getName();
getfocus();
