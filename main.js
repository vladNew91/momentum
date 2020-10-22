const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus"),
  nightBackground = "images/night/",
  morningBackground = "images/morning/",
  afternoonBackground = "images/day/",
  eveningBackground = "images/evening/",
  btn = document.querySelector(".btn"),
  images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
  ],
  months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
  days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

let i = 0,
  arrayBgImages = "";

function showTime() {
  let today = new Date(),
    day = today.getDay(),
    dayNumber = today.getDate(),
    month = today.getMonth(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //output time
  time.innerHTML = `${
    days[day]
  }<span>,</span><span> </span>${dayNumber}<span> </span>${
    months[month]
  }<span> </span>${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

//add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//set greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  //greeting
  if (hour > 6 && hour < 12) {
    greeting.textContent = "Good morning";
    arrayBgImages = morningBackground;
    document.body.classList.add("morning_text_color");
  } else if (hour > 12 && hour < 18) {
    greeting.textContent = "Good afternoon";
    arrayBgImages = afternoonBackground;
    document.body.classList.add("afternoon_text_color");
  } else if (hour > 0 && hour < 6) {
    greeting.textContent = "Good night";
    arrayBgImages = nightBackground;
    document.body.classList.add("night_text_color");
  } else {
    greeting.textContent = "Good evening";
    arrayBgImages = eveningBackground;
    document.body.classList.add("evening_text_color");
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

//IMEGES
function viewBgImage(data) {
  const body = document.querySelector("body");
  const src = data;
  const img = document.createElement("img");
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}

function getImage() {
  const index = i % images.length;
  const imageSrc = arrayBgImages + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
  }, 1000);
}

btn.addEventListener("click", getImage);
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//run
showTime();
setBgGreet();
getName();
getfocus();
