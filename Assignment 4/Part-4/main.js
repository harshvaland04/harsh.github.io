// Thanks to Renan Martineli for this version of the demo

// setup canvas

const para = document.querySelector('p');
let count = 0;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
};
