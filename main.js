const more = document.querySelector('#more')
const less = document.querySelector('#less')
let mouseTest;

const gridSizes = [8, 16, 32, 48, 64]
const max = 4
const min = 0
let currentGridSize = 2

more.addEventListener('click', increaseGrid)
less.addEventListener('click', decreaseGrid)

// Create grid
function makeGrid(size) {

    const screen = document.querySelector('#sketch-screen')
    screen.innerHTML = ''

    for(let i = 0; i <= size; i++) {
        const column = document.createElement('div')

        for(let j = 1; j <= size; j++) {
            const row = document.createElement('div')
            row.classList.add('hover')
            row.style.border = '0.1px dotted rgba(0, 0, 0, 0.2)'
            column.appendChild(row)
        }

        screen.appendChild(column)
    }
// This is inside so that it exists on each grid creation
    mouseTest = document.querySelectorAll('div.hover')

    Array.from(mouseTest).forEach((element) => {
        element.addEventListener('mouseenter', testMouseEnter)
    })
}
makeGrid(gridSizes[currentGridSize])

// Increase grid size
function increaseGrid() {

    if(currentGridSize < max) {
        currentGridSize++
        makeGrid(gridSizes[currentGridSize])
        console.log('Grid size increased.')

    }else {
        alert(`Oops! Looks like you've reached the maximum screen size. Feel free to draw or make the screen smaller.`)
    }
}

// Decrease grid size
function decreaseGrid() {

    if(currentGridSize > min) {
        currentGridSize--
        makeGrid(gridSizes[currentGridSize])
        console.log('Grid size decreased.')

    }else {
        alert(`Oops! Looks like you've reached the minimum screen size. Feel free to draw or make the screen larger.`)
    }
}
// **This says it's undefined

// function testMouseEnter() {
//     mouseTest.forEach((element) => {
//         element.target.style.backgroundColor = 'white'
//     })
// }

// **This targets whole columns or rows
function testMouseEnter(event) {
    const targetElement = event.target;
    
    // Check if the target element has the 'hover' class
    if (targetElement.classList.contains('hover')) {
        targetElement.style.backgroundColor = 'white';
    }
}

// Need to create hover effect (hover event???) to change the color of the etch a sketch squares to draw
    // background-color: rgb(51, 51, 51) for hover effect