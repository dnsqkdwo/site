// header
const closeBtn = document.getElementById("closeBtn");
const start = document.getElementById("start");

closeBtn.onclick = function() {
  start.classList.add('hide');
}

// login
const login = document.getElementById("login");
const subClose = document.getElementById("subClose");
const login_box = document.querySelector(".login_box");
const subBtn = document.getElementById("subBtn");

login.onclick = function() {
  login_box.style.display = 'block'
}

subClose.onclick = function() {
  login_box.style.display = 'none'
}

subBtn.onclick = function() {
  login_box.style.display = 'none'
  alert("로그인이 완료 되었습니다.");
}

// 회원가입
const join = document.getElementById("join");
const joinClose = document.getElementById("joinClose");
const join_box = document.querySelector(".join_box");
const joinBtn = document.getElementById("joinBtn");

join.addEventListener('click',function() {
  join_box.style.display = 'block'
});

joinClose.addEventListener('click',function(){
  join_box.style.display = 'none'
});



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
