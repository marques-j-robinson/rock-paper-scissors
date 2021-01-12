const vals = ['rock', 'paper', 'scissors']

function computerPlay() {
    const idx = Math.floor(Math.random() * Math.floor(3))
    return vals[idx]
}

function markWin(res, msg, winner) {
    res.msg = msg
    res[winner] = 1
}

function playRound(playerSelection) {
    const res = {
        msg: null,
        comScore: 0,
        playerScore: 0,
    }
    const comSelection = computerPlay()
    if (playerSelection === comSelection) {
        res.msg = "tie"
        res.comScore = .5
        res.playerScore = .5
        return res
    }
    switch(comSelection) {
        case 'rock':
            if (playerSelection === 'paper') {
                markWin(res, "paper beats rock | player wins", "playerScore")
                return res
            } else {
                markWin(res, "rock beats scissors | com wins", "comScore")
                return res
            }
            break
        case 'paper':
            if (playerSelection === 'rock') {
                markWin(res, "paper beats rock | com wins", "comScore")
                return res
            } else {
                markWin(res, "scissors beats paper | player wins", "playerScore")
                return res
            }
            break
        case 'scissors':
            if (playerSelection === 'paper') {
                markWin(res, "scissors beats paper | com wins", "comScore")
                return res
            } else {
                markWin(res, "rock beats scissors | player wins", "playerScore")
                return res
            }
            break
    }
}

function validateInput(input) {
    return vals.includes(input)
}

function game() {
    let comScore = 0
    let playerScore = 0
    while (comScore < 5 && playerScore < 5) {
        console.log('comScore', comScore)
        console.log('playerScore', playerScore)
        const playerSelection = prompt("select rock, paper or scissors")
        if (!validateInput(playerSelection)) {
            console.log('invalid input')
        } else {
            const round = playRound(playerSelection)
            comScore += round.comScore
            playerScore += round.playerScore
        }
    }
    if (comScore >= 5) {
        console.log('computer wins')
    } else {
        console.log('player wins')
    }
}

game()
