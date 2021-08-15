'use strict';

const modal = document.querySelector('.modal');
// console.log(modal);
const btnShowModal = document.querySelectorAll('.show-modal');
// console.log(showModalButtons);
const overlay = document.querySelector('.overlay');
console.log(overlay);
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//display modal buttons opening the modal on click
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

//close button on the modal
btnCloseModal.addEventListener('click', closeModal);

//note the keydown and not keypress(has an overhead of browser)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

//clicking on overlay(which will be only visible when modal is open) will close the modal
overlay.addEventListener('click', closeModal);
