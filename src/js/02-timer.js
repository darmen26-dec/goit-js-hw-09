import flatpickr from 'flatpickr'; // opisany w dokumentacji
import 'flatpickr/dist/flatpickr.min.css'; // dodatkowy import stylów
import Notiflix from 'notiflix';

const startButton = document.querySelector('button[data-start]');
startButton.disabled = true;

const daysCounter = document.querySelector('span[data-days]');
const hoursCounter = document.querySelector('span[data-hours]');
const minutesCounter = document.querySelector('span[data-minutes]');
const secondsCounter = document.querySelector('span[data-seconds]');

let pickedDate = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const datePickedByUser = new Date(selectedDates[0]);
    if (datePickedByUser > new Date()) {
      pickedDate = datePickedByUser;
      startButton.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      startButton.disabled = true;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day); // remaining days
  const hours = Math.floor((ms % day) / hour); // remaining hours
  const minutes = Math.floor(((ms % day) % hour) / minute); // remaining minutes
  const seconds = Math.floor((((ms % day) % hour) % minute) / second); // remaining seconds

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}

startButton.addEventListener('click', () => {
  if (pickedDate && !intervalId) {
    startButton.disabled = true;
    startCount();
  }
});

const startCount = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    const defaultDate = new Date();
    const timeDifference = pickedDate - defaultDate;
    if (timeDifference <= 0) {
      clearInterval(intervalId);
      return;
    }
    const timeConverter = convertMs(timeDifference);
    daysCounter.textContent = addLeadingZero(timeConverter.days);
    hoursCounter.textContent = addLeadingZero(timeConverter.hours);
    minutesCounter.textContent = addLeadingZero(timeConverter.minutes);
    secondsCounter.textContent = addLeadingZero(timeConverter.seconds);
  }, 1000);
};
