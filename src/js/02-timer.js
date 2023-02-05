import flatpickr from "../../node_modules/flatpickr";
import "../../node_modules/flatpickr/dist/flatpickr.min.css";


const refs = {
  startBtn: document.querySelector('button[data-start]'),
    daysTimer: document.querySelector('span[data-days]'),
    hoursTimer: document.querySelector('span[data-hours]'),
    minutesTimer: document.querySelector('span[data-minutes]'),
  secondsTimer: document.querySelector('span[data-seconds]'),
  clockface: document.querySelector('.js-clockface'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (options.defaultDate >= selectedDates[0]) {
            window.alert("Please choose a date in the future");
        }
        if (options.defaultDate <= selectedDates[0]) {
            refs.startBtn.disabled = false;
        }
    console.log(selectedDates[0]);
  },
};
const datepickr = flatpickr('#datetime-picker', options);

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.onTick = onTick;
  }

  start() {
    if (refs.startBtn.disabled) {
      return;
    }

      const startTime = datepickr.selectedDates[0].getTime();
    refs.startBtn.disabled = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
        let deltaTime = startTime - currentTime;
      if (startTime <= currentTime) {
        clearInterval(this.intervalId);
        deltaTime = 0;
        }
        const time = this.convertMs(deltaTime);
        console.log(startTime);
        console.log(options);

      this.onTick(time);
    }, 1000);
  }

    
   convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = this.addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
    onTick: updateClockface,
});
refs.startBtn.addEventListener('click', timer.start.bind(timer));
            
function updateClockface({ days, hours, minutes, seconds }) {
    refs.daysTimer.textContent = `${days}`;
    refs.hoursTimer.textContent = `${hours}`;
    refs.minutesTimer.textContent = `${minutes}`;
    refs.secondsTimer.textContent = `${seconds}`;
}


