function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`Rejected promise ${position} in ${delay}ms`);
    }, delay)
  })
}
  


const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', submitFormForCreatePromise);

function submitFormForCreatePromise(e) {
  e.preventDefault();
  let NumberFirstPromise = Number(refs.delay.value);
  let NumberNextPromises = Number(refs.step.value);
  let NumberAmountPromise = Number(refs.amount.value);
  let arrayPromises = [];
  let currentTime = NumberFirstPromise;

  for (let i = 1; i <= NumberAmountPromise; i += 1) {
    
    const promise = createPromise(i, currentTime).then(success => {
      console.log(success);
    }).catch(error => {
      console.log(error);
    })
    arrayPromises.push(promise);
    currentTime += NumberNextPromises;
  }
}