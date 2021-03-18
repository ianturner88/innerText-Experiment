const number2 = document.querySelector('[data-number2]');
const number3 = document.querySelector('[data-number3]');
const number4 = document.querySelector('[data-number4]');
const number5 = document.querySelector('[data-number5]');
const number6 = document.querySelector('[data-number6]');
const number7 = document.querySelector('[data-number7]');
const number8 = document.querySelector('[data-number8]');
const number9 = document.querySelector('[data-number9]');
const number10 = document.querySelector('[data-number10]');
const number11 = document.querySelector('[data-number11]');
const number12 = document.querySelector('[data-number12]');

export default class Dice {
  // the dice used to generate the random numbers 1 through 6

  constructor() {
    // initialize all numbers to zero
    this.number2 = 0;
    this.number3 = 0;
    this.number4 = 0;
    this.number5 = 0;
    this.number6 = 0;
    this.number7 = 0;
    this.number8 = 0;
    this.number9 = 0;
    this.number10 = 0;
    this.number11 = 0;
    this.number12 = 0;
  }

  rollDice() {
    // initiated by user
    // all numbers are given a new number between 1 & 6

    let counter = 0;

    while (counter < 100) {
      // creates a nice visual effect of the dice numbers changing
      this.number2 = Math.floor(Math.random() * 6) + 1;
      this.number3 = Math.floor(Math.random() * 6) + 1;
      this.number4 = Math.floor(Math.random() * 6) + 1;
      this.number5 = Math.floor(Math.random() * 6) + 1;
      this.number6 = Math.floor(Math.random() * 6) + 1;
      this.number7 = Math.floor(Math.random() * 6) + 1;
      this.number7 = Math.floor(Math.random() * 6) + 1;
      this.number8 = Math.floor(Math.random() * 6) + 1;
      this.number9 = Math.floor(Math.random() * 6) + 1;
      this.number10 = Math.floor(Math.random() * 6) + 1;
      this.number11 = Math.floor(Math.random() * 6) + 1;
      this.number12 = Math.floor(Math.random() * 6) + 1;

      number2.innerText = `${this.number2}`;
      number3.innerText = `${this.number3}`;
      number4.innerText = `${this.number4}`;
      number5.innerText = `${this.number5}`;
      number6.innerText = `${this.number6}`;
      number7.innerText = `${this.number7}`;
      number8.innerText = `${this.number8}`;
      number9.innerText = `${this.number9}`;
      number10.innerText = `${this.number10}`;
      number11.innerText = `${this.number11}`;
      number12.innerText = `${this.number12}`;
      counter++;
    }
  }
}
