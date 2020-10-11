const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

let index = 0;

button.addEventListener('click', () => createNotification())

function createNotification() {
   const notification = document.createElement('div');
   notification.classList.add('toast');
   notification.innerHTML = messages[Math.floor(Math.random() * messages.length)];
   notification.addEventListener('click', (event) => removeToast(event));
   
   toasts.appendChild(notification)
   setTimeout(() => {
    notification.remove()
   }, 4000);
}

function removeToast(event) {
    event.target.remove();
}