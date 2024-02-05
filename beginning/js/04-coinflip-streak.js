let coinFlip;
do {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip ? "Tails" : "Heads");
} while (coinFlip !== 1);
