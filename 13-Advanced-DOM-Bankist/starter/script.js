'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const btnScrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const allSections = document.querySelectorAll('.section');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//creating element example
//cookie message
const message = document.createElement('div');
message.classList.add('cookie-message'); //already existing in CSS
message.innerHTML = `We use cookies to improve functionality and analytics <button class="btn btn--close-cookie">OK</button>`;
header.append(message);

//used querySelector on Element message
message.querySelector('.btn').addEventListener('click', () => message.remove());

//NOTE: the updates to style are done in the in-line HTML code
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//Cannot access the style properties from CSS, example
// console.log(message.style.color); //empty

//to access calculated style parameters example
// console.log(getComputedStyle(message).height);

//manipulating using JS
//NOTE:can use + operator to add 'px' to the calculated height because of right to left evaluation of +
message.style.height = parseFloat(getComputedStyle(message).height) + 30 + 'px';

btnScrollto.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('click');
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//this is efficent as we want to minimize the number of evenhandlers attached
//NOTE:add event listener to common parent use target to get the element cliked
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    // console.log('this is link');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', function (e) {
  //NOTE: if click on not the button will result in clicked to undefined
  const clicked = e.target.closest('.btn');
  //guard Clause
  if (!clicked) return;
  //clearing all active tabs and content
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //Activate tab
  clicked.classList.add('operations__tab--active');
  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.nav__logo');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
//mouseenter does not bubble, mouseover bubbles
nav.addEventListener('mouseover', e => handleHover(e, 0.5));

nav.addEventListener('mouseout', e => handleHover(e, 0.5));

//sticky nav
const intialcoord = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > intialcoord.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// const obsCallback = function (entires, observer) {
//   entires.forEach(et => console.log(et));
// };
// const obsOptions = {
//   root: null,
//   threshold: [0,0.2]
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});

observer.observe(header);

//hiding sections
allSections.forEach(e => {
  // e.classList.add('section--hidden');
});

//reaveal sections as we scroll through

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
  // } else {
  //   console.log(`entered : ${entry.target}`);
  //   entry.target.classList.remove('section--hidden');
  //NOTE:uncomment above used only for ease of dev
  // }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//making all sections invisible
allSections.forEach(e => {
  sectionObserver.observe(e);
});

const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // console.log(entry.target.src);

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0.4,
  rootMargin: '200px', //before scrolling into the
});

imgTargets.forEach(e => imageObserver.observe(e));

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const goToSlide = function (slide) {
  slides.forEach((s, k) => {
    s.style.transform = `translateX(${k * 100 - slide * 100}%)`;
  });
};
let curSlide = 0;
goToSlide(0);
const maxSlide = slides.length; //variable to handle edge cases and start conditions
// slider.style.transform = 'scale(0.2) translateX(-900px)';
// slider.style.overflow = 'visible';

// [...slides][1].style.transform = 'translateX(100%)';
//Helper functiosn to refactor the code
const nextSlide = () => {
  curSlide++;
  if (curSlide == maxSlide) curSlide = 0;
  goToSlide(curSlide);
};
const prevSlide = () => {
  curSlide--;
  if (curSlide == -1) curSlide = maxSlide - 1;
  goToSlide(curSlide);
};
// 0 100 200 300 0
//-100 0 100 200 1
//00 100 200 300 0

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
