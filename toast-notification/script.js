const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'You are stupid',
    'You can do better',
    'Mind your steps',
    'Do not give a shit',
    'Never give up',
    'Good job',
    'Save the progress',
    'Beware your stuff'
];
//here is an example how to change the messages etc. But in reality we need to specify our outcome messages by type, etc. Down it will be modified by validity with addition classes
// button.addEventListener('click', () => createNotification());
// function createNotification() {
//     const notification = document.createElement('div');
//     notification.classList.add('toast');
//     notification.innerHTML = getRandomMessage();
//     toasts.appendChild(notification);
//     setTimeout(() => {
//         notification.remove()
//     }, 5000);
// }
// function getRandomMessage() {
//     return messages[Math.floor(Math.random() * messages.length)];
// }
const types = ['info', 'success', 'error'];
button.addEventListener('click', () => createNotification());
function createNotification(message = null, type = null) {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(type ? type : getRandomType());
    notification.innerHTML = message ? message : getRandomMessage();
    toasts.appendChild(notification);
    setTimeout(() => {
        notification.remove()
    }, 5000);
}
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
