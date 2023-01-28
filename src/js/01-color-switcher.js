const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartButtonClick);
refs.stopBtn.addEventListener('click', onStopButtonClick);
let timerColorChange;

function onStartButtonClick() {
    refs.startBtn.disabled = true;
    timerColorChange = setInterval(colorBody, 1000)
};
 
function onStopButtonClick() {
    refs.startBtn.disabled = false;
    clearInterval(timerColorChange);
 };

function colorBody() {
    refs.body.style.backgroundColor = getRandomHexColor()
 };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}