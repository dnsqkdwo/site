// header
const closeBtn = document.getElementById("closeBtn");
const start = document.getElementById("start");

closeBtn.onclick = function() {
  start.classList.add('hide');
}

// section
const slide = document.querySelector(".slide");

const Btn = document.querySelectorAll("#Btn");
const bTn = document.querySelectorAll("#bTn");
const btN = document.querySelectorAll("#btN");

Btn.forEach(function(btn) {
  btn.addEventListener("click", function () {
    slide.style.transform = "translateX(0)";
  });
});

bTn.forEach(function(btn) {
  btn.addEventListener("click", function () {
    slide.style.transform = "translateX(-100vw)";
  });
});

btN.forEach(function(btn) {
  btn.addEventListener("click", function () {
    slide.style.transform = "translateX(-200vw)";
  });
});
