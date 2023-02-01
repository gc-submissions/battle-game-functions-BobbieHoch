"use strict";
let randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
};

const chooseOption = (opt1, opt2) => {
<<<<<<< HEAD
    let randNum = Math.floor(Math.random());
    return randNum === 0 ? opt1 : opt2}

    //terneray operator like:if else 
=======
    let randNum = Math.floor(Math.random() * 2) == 0 ? opt1 : opt2;
    return randNum;
};
>>>>>>> c4bd5a9a44cc872b9734fbf9e5df51de25dfc581
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
<<<<<<< HEAD
let isDead = (health) => health <= 0 ? true : false; 
    //     return true;
    // } else {
    //     return false;
        // can be ternery
    

=======
let isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
        // can be ternery
    }
};
>>>>>>> c4bd5a9a44cc872b9734fbf9e5df51de25dfc581
function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
<<<<<<< HEAD
            }
        } else {
=======
            } else {
>>>>>>> c4bd5a9a44cc872b9734fbf9e5df51de25dfc581
                player1Health = attackPlayer(player1Health);
                logHealth(player1, player1Health);
                if (isDead(player1Health)) {
                    logDeath(player2, player1);
                    break;
                }
            }
        }
    }
<<<<<<< HEAD

fight("Phillip", "Franklin", 200, 200);
=======
}
fight("Phillip", "Franklin", 200, 200);

// TODO - write your code here.
>>>>>>> c4bd5a9a44cc872b9734fbf9e5df51de25dfc581

// TODO - write your code here.
