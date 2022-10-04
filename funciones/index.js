// IsPrime section
const isPrimeForm = document.querySelector('.isPrime form')
const isPrimeInputElement = document.querySelector('.isPrime #isPrimeNum')
const isPrimeResultElement = document.querySelector('.isPrime .result')

// maxMinusMin section
const maxMinusMinForm = document.querySelector('.maxMinusMin form')
const maxMinusMinInputElOne = document.querySelector('.maxMinusMin #maxMinusMin1')
const maxMinusMinInputElTwo = document.querySelector('.maxMinusMin #maxMinusMin2')
const maxMinusMinResultElement = document.querySelector('.maxMinusMin .result')

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

maxMinusMinForm.addEventListener('submit', e => {
  e.preventDefault()
  const number1 = Number(maxMinusMinInputElOne.value)
  const number2 = Number(maxMinusMinInputElTwo.value)

  maxMinusMinResultElement.textContent = `El resultado de la resta es ${maxMinusMin(number1, number2)}`
  maxMinusMinInputElOne.value = undefined
  maxMinusMinInputElTwo.value = undefined
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

function maxMinusMin(a, b) {
  const max = Math.max(a, b)
  const min = Math.min(a, b)

  return max - min
}
