'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const header = document.querySelector('.header');
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
console.log(message.style.color); //empty

//to access calculated style parameters example
console.log(getComputedStyle(message).height);

//manipulating using JS
//NOTE:can use + operator to add 'px' to the calculated height because of right to left evaluation of +
message.style.height = parseFloat(getComputedStyle(message).height) + 30 + 'px';

const btnScrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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
