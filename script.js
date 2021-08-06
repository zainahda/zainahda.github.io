// navbarSlide section start
const navSlide = () => {
  const bgMenu = document.querySelector(".bg-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  bgMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    bgMenu.classList.toggle('toggle');
  });
  
};

navSlide();
// navbarSlide section end

// textTyping section start
const texts = ["Muhammad Zainul Ahda"]; 
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 500);
}());
// textTyping section end

// slider section start
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.
  getElementById('carousel-button-next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel-button-prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
// slider section end
