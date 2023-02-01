
let playerScore = 0
let compScore = 0 

function computerPlay() {
    const arrofChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrofChoices.length)
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You tied! You both picked ${playerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lost! Rock crushes Scissors"
        compScore++
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lost! Paper covers Rock"
        compScore++
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! Scissors cuts Paper'
        compScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You won! Paper covers Rock'
        playerScore++
    } else if (playerSelection === 'Scissors' && computerSelection === 'paper') {
        return 'You won! Scissors cuts Paper'
        playerScore++
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won! Rock crushes Scissors'
        playerScore++
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = computerPlay()
        console.log('1', playRound(playerSelection, computerSelection))
    } 
}

if (playerScore > compScore) {
    alert('you won')
} else if (compScore > playerScore) {
    alert('you lost')
}

console.log(game())