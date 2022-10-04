const isPrimeForm = document.querySelector('.isPrime form')
const isPrimeInputElement = document.querySelector('.isPrime #isPrimeNum')
const isPrimeResultElement = document.querySelector('.isPrime .result')

isPrimeForm.addEventListener('submit', e => {
  e.preventDefault()
  const number = Math.abs(Number(isPrimeInputElement.value))
  let result = ''

  if (isPrime(number)) {
    result = `${number} es primo.`
  } else {
    result = `${number} no es primo`
  }

  isPrimeResultElement.textContent = result
  isPrimeInputElement.value = undefined
})

function isPrime(number) {
  let counter = 0

  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      counter++
    }
  }

  return counter === 2;
}
