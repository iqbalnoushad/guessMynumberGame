/* 
    Guess my Number game ... 
*/

// variables declaration
let btnRestart = document.querySelector('#btnRestart');
let btnCheck = document.querySelector('#btnCheck');
let showResult = document.querySelector('#showResult');
let realScore = document.querySelector('.score');
let heighScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
let score = 20;
// generating random number
let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

// console.log(typeof inputNumber);
// showResult.textContent = randomNumber;
// call evenlistener to check the value

btnCheck.addEventListener('click', () => {
  let inputNumber = Number(document.querySelector('#number').value);
  // no input
  if (!inputNumber) {
    message.textContent = '😒 NO Number';

    // win player wins
  } else if (inputNumber === randomNumber) {
    message.textContent = '🎉 Correct Number';
    heighScore.textContent = score;
    showResult.textContent = inputNumber;
    document.querySelector('body').style.backgroundColor = '#E19898';
    // when guess is high
  } else if (inputNumber > randomNumber) {
    if (score > 1) {
      message.textContent = ' 📈 Too high Number';
      //   showResult.textContent = inputNumber;
      score--;
      realScore.textContent = score;
    } else {
      message.textContent = '💥 you lost the game!';
      realScore.textContent = score;
    }
    // when guess is low
  } else if (inputNumber < randomNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low Number';
      //   showResult.textContent = inputNumber;
      score--;
      realScore.textContent = score;
    } else {
      message.textContent = '💥 you lost the game!';
      score -= score;
      realScore.textContent = score;
    }
  } else {
    console.log(`try next time..`);
  }
});

btnRestart.addEventListener('click', () => {
  //   inputNumber.textContent = '';
  //   inputNumber.textContent.value = '';
  document.querySelector('#number').value = '';
  showResult.textContent = '?';
  realScore.textContent = 20;
  message.textContent = '🤔 start guessing...';
  document.querySelector('body').style.backgroundColor = '#b4b9ff';
});
