function makeGrid(size) {
    const screen = document.querySelector('#sketch-screen')
    for(let i = 0; i <= size; i++) {
        const column = document.createElement('div')
        column.classList.add('hover')
        for(let j = 1; j <= size; j++) {
            const row = document.createElement('div')
            row.classList.add('hover')
            row.style.border = '0.1px dotted black'
            column.appendChild(row)
        }
        screen.appendChild(column)
    }
}
makeGrid(48)

// Need to create hover effect to change the color of the etch a sketch squares to draw
// background-color: rgb(51, 51, 51) for hover effect
// add two white knobs w click events to increase or decrease size of grid (16,32,48,64,100)