const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => options[Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
    let result;
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === 'rock' && computer === 'rock') {
        result = ['You tied! Computer also chose rock!', 'draw'];
    } else if (player === 'rock' && computer === 'paper') {
        result = ['You lost! Paper beats Rock!', 'computer'];
    } else if (player === 'rock' && computer === 'scissors') {
        result = ['You won! Rock beats Scissors!', 'player'];
    } else if (player === 'paper' && computer === 'rock') {
        result = ['You won! Paper beats Rock!', 'player'];
    } else if (player === 'paper' && computer === 'paper') {
        result = ['You tied! Computer also chose paper!', 'draw'];
    } else if (player === 'paper' && computer === 'scissors') {
        result = ['You lost! Scissors beat Paper!', 'computer'];
    } else if (player === 'scissors' && computer === 'rock') {
        result = ['You lost! Rock beats Scissors!', 'computer'];
    } else if (player === 'scissors' && computer === 'paper') {
        result = ['You won! Scissors beat Paper!', 'player'];
    } else if (player === 'scissors' && computer === 'scissors') {
        result = ['You tied! Computer also chose scissors!', 'draw'];
    }

    return result;
}

const game = () => {
    let roundCounter = 0;
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    for(let i = 1; i <= 5; i++) {
        if (roundCounter >= 5) {
            return;
        }

        const playerChoice = prompt('What do you choose? Rock, paper or scissors?');
        const computerChoice = getComputerChoice();

        const roundResult = playRound(playerChoice, computerChoice);

        console.log(roundResult[0]);
        console.log(`{5 - i > 0}` ? `Only ${5 - i} ${5 - i === 1 ? 'round' : 'rounds'} left` : `Game finished!`);

        if(roundResult[1] === 'computer') {
            computerWins++;
        } else if(roundResult[1] === 'player') {
            playerWins++;
        } else {
            draws++;
        }

        roundCounter++;
    }

    const winner = playerWins > computerWins ? 'player' : 'computer';

    if(roundCounter >= 5) {
        console.log(
`Game finished!
${winner === 'player' ? 'You won!' : 'Computer won!'}
Your winnings: ${playerWins}
Computer winnings: ${computerWins} 
Draws: ${draws};
`
        );
    }
}

game();