const container = document.getElementById('container');
const colors = ['#f9ed30', '#e6a03a', '#d33d1b', '#e02e34', '#cd216d', '#9d2662','#692972', '#3f62b3', '#1b77d5', '#557e77', '#3d774a', '#afb24d'];
const SQUARES = 800;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor()

    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

