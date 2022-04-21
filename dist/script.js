/*****************************************
 **  Simple fullpage Parallax Scroll Effect
 **  with touch support
 **  https://codepen.io/franzk/pen/aNxQxP
 **
 **  based on work by Emily Hayman
 **  https://codepen.io/eehayman/pen/qdGZJr
 **
 *****************************************/
// navbar script
// theme
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// nav
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function menuToggle() {
//   let x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// const hamburger = document.getElementById('hamburger');
// hamburger.addEventListener('click', menuToggle);

// navbar script end
// main theme script
// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function wheelScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }
  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

function touchScroll(ts, te) {
  delta = te - ts;
  console.log('para');
  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
var ts;

//window.addEventListener(mousewheelEvent, _.throttle(wheelScroll, 60), false);
window.addEventListener(mousewheelEvent, $.throttle(60, wheelScroll), false);
window.addEventListener("touchstart", function(e) {
  ts = e.touches[0].clientY;
}, false);
window.addEventListener("touchend", function(e) {
  var te = e.changedTouches[0].clientY;
  touchScroll(ts, te);
}, false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}
// main theme script end
// section one slider script
{
  class SliderClip {
    constructor(el) {
      this.el = el;
      this.Slides = Array.from(this.el.querySelectorAll('li'));
      this.Nav = Array.from(this.el.querySelectorAll('nav a'));
      this.totalSlides = this.Slides.length;
      this.current = 0;
      this.autoPlay = true; //true or false
      this.timeTrans = 4000; //transition time in milliseconds
      this.IndexElements = [];

      for(let i=0;i<this.totalSlides;i++) {
        this.IndexElements.push(i);
      }

      this.setCurret();
      this.initEvents();
    }
    setCurret() {
      this.Slides[this.current].classList.add('current');
      this.Nav[this.current].classList.add('current_dot');
    }
    initEvents() {
      const self = this;

      this.Nav.forEach((dot) => {
        dot.addEventListener('click', (ele) => {
          ele.preventDefault();
          this.changeSlide(this.Nav.indexOf(dot));
        })
      })

      this.el.addEventListener('mouseenter', () => self.autoPlay = false);
      this.el.addEventListener('mouseleave', () => self.autoPlay = true);

      setInterval(function() {
        if (self.autoPlay) {
          self.current = self.current < self.Slides.length-1 ? self.current + 1 : 0;
          self.changeSlide(self.current);
        }
      }, this.timeTrans);

    }
    changeSlide(index) {

      this.Nav.forEach((allDot) => allDot.classList.remove('current_dot'));

      this.Slides.forEach((allSlides) => allSlides.classList.remove('prev', 'current'));

      const getAllPrev = value => value < index;

      const prevElements = this.IndexElements.filter(getAllPrev);

      prevElements.forEach((indexPrevEle) => this.Slides[indexPrevEle].classList.add('prev'));

      this.Slides[index].classList.add('current');
      this.Nav[index].classList.add('current_dot');
    }
  }

  const slider = new SliderClip(document.querySelector('.slider'));
}
// slidersection3 script

// slider section3 script end