const more = document.querySelector('#more');
const less = document.querySelector('#less');
const gridSizes = [8, 16, 32];
const max = 2;
const min = 0;
let currentGridSize = 1;

more.addEventListener('click', increaseGrid);
less.addEventListener('click', decreaseGrid);

// Create grid
function makeGrid(size) {

    const screen = document.querySelector('#sketch-screen');
    screen.innerHTML = '';

    for(let i = 0; i <= size; i++) {
        const column = document.createElement('div');

        for(let j = 1; j <= size; j++) {
            const row = document.createElement('div');
            row.classList.add('hover');
            row.style.border = '0.1px dotted rgba(0, 0, 0, 0.2)';
            column.appendChild(row);
        };

        screen.appendChild(column);
    };

// This is inside so that it exists on every grid creation
    const drawScreen = document.querySelectorAll('div.hover');

    Array.from(drawScreen).forEach((element) => {
        element.addEventListener('mouseenter', draw);
    });
};

// Call the function to create the grid
makeGrid(gridSizes[currentGridSize]);

// Increase grid size
function increaseGrid() {

    if(currentGridSize < max) {
        currentGridSize++;
        makeGrid(gridSizes[currentGridSize]);

    }else {
        alert(`Oops! Looks like you've reached the maximum screen size. Feel free to draw or make the screen smaller.`);
    }
}

// Decrease grid size
function decreaseGrid() {

    if(currentGridSize > min) {
        currentGridSize--;
        makeGrid(gridSizes[currentGridSize]);

    }else {
        alert(`Oops! Looks like you've reached the minimum screen size. Feel free to draw or make the screen larger.`);
    };
};

function draw(event) {

    const targetElement = event.target;
    
    // Check if the target element has the 'hover' class
    if (targetElement.classList.contains('hover')) {
        targetElement.style.backgroundColor = 'rgb(101, 101, 101)';
    };

};