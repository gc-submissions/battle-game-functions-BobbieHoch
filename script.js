"use strict";
let randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
};

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2) == 0 ? opt1 : opt2;
    return randNum;
};
console.log(chooseOption);

let attackPlayer = function (health) {
    return (health = health - randomDamage());
};
let logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
};
let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
};
let isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
        // can be ternery
    }
};
function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            } else {
                player1Health = attackPlayer(player1Health);
                logHealth(player1, player1Health);
                if (isDead(player1Health)) {
                    logDeath(player2, player1);
                    break;
                }
            }
        }
    }
}
fight("Phillip", "Franklin", 200, 200);

// TODO - write your code here.
