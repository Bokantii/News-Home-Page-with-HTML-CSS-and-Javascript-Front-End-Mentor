const screenOverlay = document.querySelector(".screen_overlay");
const hamburgerIcon = document.querySelector(".hamburger");
const curtainOverlay = document.querySelector(" .curtain_overlay  ");
const closeBtn = document.querySelector(".close_btn");

function openNav() {
  screenOverlay.style.width = "100%";
  screenOverlay.style.height = "100%";
  curtainOverlay.style.height = "100%";
  curtainOverlay.style.width = "70%";
}
function closeNav() {
  screenOverlay.style.width = "0";
  screenOverlay.style.height = "0";
  curtainOverlay.style.height = "0";
  curtainOverlay.style.width = "0";
}

hamburgerIcon.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
