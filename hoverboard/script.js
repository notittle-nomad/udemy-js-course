const container = document.getElementById('container');
//can use any color in any type
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#fff762', '#4a1dfe', '#338557', '#6f1d7c'];
//amound of squares
const SQUARES = 700;
for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`;
}
function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000000';
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}