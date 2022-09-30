const length = document.getElementById('length')
const italic = document.getElementById('italic')
const crossedOut = document.getElementById('crossed-out')

const input = window.prompt('Introduce una cadena de texto')

length.textContent = input.length

italic.style.fontStyle = 'italic'
italic.textContent = input

crossedOut.style.textDecoration = 'line-through'
crossedOut.textContent = input
