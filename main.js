const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const bowl = $(".bowl");
const circle = $$(".plate>div");
const RSBOX = $$(".RS-BOX>div");
var timeDown = $(".TIME-DOWN");
const rand = () => {
  return Math.floor(1 + Math.random() * 2);
};

const wait = () => {
  loop = setInterval(() => {
    timeDown.style.color = "orange";
    timeDown.innerHTML = i;
    if (i <= 0) {
      clearInterval(loop);
      i = 15;
      open();
    } else {
      i--;
    }
  }, 1000);
};

const open = () => {
  if (setPoint() === "CHAN") {
    RSBOX[0].style.background = "orange";
  } else {
    RSBOX[1].style.background = "orange";
  }
  bowl.style.left = "100%";
  loop = setInterval(() => {
    timeDown.style.color = "red";
    timeDown.innerHTML = i;
    if (i <= 0) {
      clearInterval(loop);
      i = 45;
      run();
    } else {
      i--;
    }
  }, 1000);
};

const run = () => {
  bowl.style.left = "50%";
  RSBOX[0].style.background = "#303030";
  RSBOX[1].style.background = "#303030";

  wait();
};

const setPoint = () => {
  let temp = 0;
  let num = 0;
  for (n = 0; n < 4; n++) {
    num = rand();
    num === 1 ? temp++ : false;
    color = num == 1 ? "#303030" : "#e62e00";
    circle[n].style.background = color;
  }

  return temp !== 2 && temp !== 4 ? "LER" : "CHAN";
};

let loop;
let i = 45;
run();
