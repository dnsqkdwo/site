const closeBtn = document.getElementById("closeBtn");
const start = document.getElementById("start");

closeBtn.onclick = function() {
  start.classList.add('hide');
}