const array = []
const arrayElement = document.getElementById('array')

document.getElementById('unshift').addEventListener('click', e => {
  array.unshift(random())
  arrayElement.textContent = array
})

document.getElementById('push').addEventListener('click', e => {
  array.push(random())
  arrayElement.textContent = array
})

document.getElementById('shift').addEventListener('click', e => {
  array.shift(random())
  arrayElement.textContent = array
})

document.getElementById('pop').addEventListener('click', e => {
  array.pop(random())
  arrayElement.textContent = array
})

document.getElementById('asc').addEventListener('click', e => {
  arrayElement.textContent = array.sort()
})

document.getElementById('desc').addEventListener('click', e => {
  arrayElement.textContent = array.sort((a, b) => b - a)
})

function random () {
  return Math.floor(Math.random() * 1000) + 1
}
