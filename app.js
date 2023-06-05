const gameBoard = document.querySelector('#Gameboard')
const infoDisplay = document.querySelector('#info')
const startcells = 
[ 
    "", "", "", "", "", "", "", "", "" 
]

let go = 'circle'
infoDisplay.textContent = "Cirle Plays First"

function createBoard()
{
    startcells.forEach((_cell,index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })  
}
createBoard()

function addGo(e)
{
    const goDisplay = document.createElement('div') 
    goDisplay.classList.add(go)
    e.target.append(goDisplay)   
    go = go === 'circle' ? 'cross' : 'circle'
    infoDisplay.textContent = `It is now ${go}s Turn!`
    e.target.removeEventListener('click', addGo)
    checkscore()
}

function checkscore()
{
    const allsquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
        const circlewins = array.every(cell => 
            allsquares[cell].firstChild?.classList.contains('circle'))

            if (circlewins) {
                infoDisplay.textContent = 'Circle Wins!!'
                allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })

    winningCombos.forEach(array => {
        const crosswins = array.every(cell => 
            allsquares[cell].firstChild?.classList.contains('cross'))

            if (crosswins) {
                infoDisplay.textContent = 'Cross Wins!!'
                allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })

    

}