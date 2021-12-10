//hamburger menu function
var MenuBtn = document.getElementById("menuBtn");
var burgerIcon = document.getElementById("burgerIcon");
var closeIcon = document.getElementById("closeIcon");
var pageNavbar = document.getElementById("pageNavbar");

MenuBtn.addEventListener("click", () => {
  pageNavbar.classList.toggle("inActive");
  burgerIcon.classList.toggle("activeMenu");
  closeIcon.classList.toggle("activeMenu");
});

//image slide function
var imageBox = document.querySelector(".imageBox");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", () => moveImage("left"));
rightArrow.addEventListener("click", () => moveImage("right"));

var dir = 0;
const moveImage = (direction) => {
  if (direction === "left") {
    if (dir === 0) {
      imageBox.style.transform = "translateX(-300%)";
      dir = 3;
    } else if (dir > 0) {
      dir--;
      imageBox.style.transform = `translateX(${dir * -100}%)`;
    }
  } else {
    dir++;
    if (dir < 4) {
      imageBox.style.transform = `translateX(${dir * -100}%)`;
    } else {
      imageBox.style.transform = "translateX(0)";
      dir = 0;
    }
  }
};
