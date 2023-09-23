const bodyChangeColor = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

stopButton.disabled = true; // domyślnie wyłącz przycisk "Stop"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null; // interwał nie jest jeszcze uruchomiony, po uruchomieniu identyfikator zostaje przypisany do timerId, co pozwala na jego późniejsze zatrzymanie, gdy będzie to potrzebne

startButton.addEventListener('click', () => {
  timerId = setInterval(() => {
    // uruchom interwał zmiany kolorów
    const changeColor = getRandomHexColor();
    bodyChangeColor.style.backgroundColor = changeColor;
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
});
