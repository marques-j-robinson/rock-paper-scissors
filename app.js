const vals = ['rock', 'paper', 'scissors']

function computerPlay() {
    const idx = Math.floor(Math.random() * Math.floor(3))
    return vals[idx]
}

function playRound(playerSelection, computerSelection) {
    // Handle Tie Case
    if (playerSelection === computerSelection) {
        return 'tie'
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock'
        } else if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissors'
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock'
        } else if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper'
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper'
        } else if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors'
        }
    }
}

function getVictoryCondition(res) {
    const re = new RegExp('(Win)')
    console.log(res)
    const match = re.exec(res)
    return !!match
}

function game() {
    const rounds = 5
    let curRound = 0
    let scorePlayer = 0
    let scoreCom = 0
    while (curRound < rounds) {
        const playerSelection = prompt('select "rock", "paper", or "scissors"')
        const computerSelection = computerPlay()
        const res = playRound(playerSelection, computerSelection)
        if (res === 'tie') {
            scorePlayer += 0.5
            scoreCom += 0.5
        } else if (getVictoryCondition(res)) {
            scorePlayer += 1
        } else {
            scoreCom += 1
        }
        console.log('player-', scorePlayer, playerSelection)
        console.log('com-', scoreCom, computerSelection)
        curRound += 1
    }
    if (scorePlayer === scoreCom) {
        console.log('Tie Game!')
    } else if (scorePlayer > scoreCom) {
        console.log('Player Wins!')
    } else {
        console.log('Computer Wins!')
    }
}

game()
