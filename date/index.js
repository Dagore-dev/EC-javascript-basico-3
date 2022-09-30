window.setInterval(millisecondsUntilEndOfYear, 1)

function millisecondsUntilEndOfYear () {
  const time = document.getElementById('time')
  const date = new Date()
  const currentYear = date.getFullYear()
  const currentDate = date.getTime()
  const lastDayOfYear = Date.parse(`01/01/${currentYear + 1}`)

  time.textContent = lastDayOfYear - currentDate
}
