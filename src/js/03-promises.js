import Notiflix from 'notiflix';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', onSubmitForm); // po naciśnięciu przycisku "Submit" zostanie uruchomiona funkcja onSubmitForm

function onSubmitForm(event) {
  event.preventDefault(); // zapobiega domyślnej akcji przeglądarki, która polega na przeładowaniu strony po wysłaniu formularza
  const { delay, step, amount } = event.currentTarget.elements;

  if (delay.value < 0 || step.value < 0 || amount.value < 0) {
    Notiflix.Notify.warning('Please enter correct number!');
  } else {
    for (let i = 0; i < amount.value; i++) {
      let position = i + 1;
      const delays = Number(delay.value) + step.value * i;

      createPromise(position, delays)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  }
  event.currentTarget.reset(); // po zakończeniu pętli resetujemy formularz, aby użytkownik mógł wprowadzić nowe dane i ponownie wysłać formularz
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
