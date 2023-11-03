navigator.serviceWorker.register('/service-worker.js')

const response = await fetch('/time')
const text = await response.text()
document.getElementById('time').innerText = text
