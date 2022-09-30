let radius = Number(window.prompt('Dame el radio en cm y te digo el área de la circunferencia'))

while (Number.isNaN(radius) || !Number.isFinite(radius)) {
  radius = Number(window.prompt('No has introducido un número, prueba de nuevo'))
}

const area = Math.PI * (radius ** 2)
window.alert(`El área sería ${area.toFixed(2)} cm\u00B2`)
