const more = document.querySelector('#more')
const less = document.querySelector('#less')
const gridSizes = [8, 16, 32, 48, 64]
const max = 4
const min = 0
let currentGridSize = 2

more.addEventListener('click', increaseGrid)
less.addEventListener('click', decreaseGrid)

// Create grid, default is 48
function makeGrid(size) {
    const screen = document.querySelector('#sketch-screen')
    screen.innerHTML = '';
    for(let i = 0; i <= size; i++) {
        const column = document.createElement('div')
        column.classList.add('hover')
        for(let j = 1; j <= size; j++) {
            const row = document.createElement('div')
            row.classList.add('hover')
            row.style.border = '0.1px dotted rgba(0, 0, 0, 0.2)'
            column.appendChild(row)
        }
        screen.appendChild(column)
    }
}
makeGrid(gridSizes[currentGridSize])

// Increase grid size
function increaseGrid() {
    if(currentGridSize < max) {
        currentGridSize++
        makeGrid(gridSizes[currentGridSize])
        console.log(currentGridSize)
        console.log(gridSizes[currentGridSize])
    }else {
        alert(`Oops! Looks like you've reached the maximum size.`)
    }
}

// Decrease grid size
function decreaseGrid() {
    if(currentGridSize > min) {
        currentGridSize--
        makeGrid(gridSizes[currentGridSize])
        console.log(currentGridSize)
    }else {
        alert(`Oops! Looks like you've reached the minimum size.`)
    }
}

// Need to create hover effect (hover event???) to change the color of the etch a sketch squares to draw
    // background-color: rgb(51, 51, 51) for hover effect
// Add two white knobs w click events to increase or decrease size of grid (16,32,48,64,100)
    // default is 48, Click 'LESS' decrease to 32 -> 16 \ Click 'MORE' increase to 64 -> 100