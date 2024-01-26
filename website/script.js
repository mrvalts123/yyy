const cube = document.querySelector("#cube");
const cback = document.querySelector(".back");
const ctop = document.querySelector(".top");
const cleft = document.querySelector(".left");
const cright = document.querySelector(".right");
const glow = document.querySelector(".hexagon");
const powerup = document.querySelector(".powerup");
const transitionTime = "750ms";
let c = 0;

ctop.style.transition = `all ${transitionTime}`;
cleft.style.transition = `all ${transitionTime}`;
cright.style.transition = `all ${transitionTime}`;
cube.style.transition = `all ${transitionTime}`;
powerup.style.transition = `all ${transitionTime}`;
glow.style.transition = `all ${transitionTime}`;
cback.style.transition = `all ${transitionTime}`;

let isOpen = false;
cube.addEventListener("click", openCube);

function openCube() {
  if (!this.isOpen) {
    award();
    ctop.style.transform = "translateY(-3rem)";
    cleft.style.transform = "translateX(-3rem)";
    cright.style.transform = "translateX(3rem)";
    ctop.style.opacity = 0.1;
    cleft.style.opacity = 0.1;
    cright.style.opacity = 0.1;
    cback.style.opacity = 0.1;
    glow.style.opacity = 0.5;
    powerup.style.opacity = 1;
    this.isOpen = true;
    cube.style.animationPlayState = "paused";
    powerup.style.zIndex = 10;
    powerup.style.height = "80px";
    powerup.style.width = "80px";
  } else {
    ctop.style.transform = "translateY(0)";
    cleft.style.transform = "translateX(0)";
    cright.style.transform = "translateX(0)";
    cube.style.opacity = 1;
    this.isOpen = false;
    ctop.style.opacity = 1;
    cleft.style.opacity = 1;
    cright.style.opacity = 1;
    cback.style.opacity = 1;
    glow.style.opacity = 1;
    powerup.style.opacity = 0;
    powerup.style.zIndex = 0;
    cube.style.animationPlayState = "running";
    powerup.style.height = "48px";
    powerup.style.width = "48px";
    changeVar("rgba(255,195,26,0.4)");
  }
}

function changeVar(glow) {
  document.documentElement.style.setProperty("--glow", glow);
}

function award() {
  if (c % 2 == 0) {
    //pp
    powerup.style.backgroundImage = "url('https://yt3.ggpht.com/PO3GJP_XewvdYnVyRxM5XD6cl5SQFOezfgDX389a3W9RO7E9upQDKVWkofGGrJUYCXZkhZlvIoQ=s900-c-k-c0x00ffffff-no-rj')";
    changeVar("rgba(69,185,251,0.33)");
  } else {
    // glitch
    powerup.style.backgroundImage = "url('https://metadata.degods.com/g/3932-dead.png')";
    changeVar("rgba(246,6,120,0.4)");
  }
  
  c++;
}