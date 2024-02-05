let coinFlip = Math.round(Math.random());
let choice = prompt("Select 'Heads' or 'Tails'").toLowerCase();

if ((coinFlip === 0 && choice === 'heads') || (coinFlip === 1 && choice === 'tails')) {
    alert(`The flip was ${coinFlip ? 'tails' : 'heads'} and you chose ${choice}...you win!`);
} else {
    alert(`The flip was ${coinFlip ? 'tails' : 'heads'} but you chose ${choice}...you lose!`);
}
