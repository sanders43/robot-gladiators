

const randomNumber = (min,max) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};



const fightOrSkip = () => {
    promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose!");
    promptFight = promptFight.toLowerCase();
       if (!promptFight) {
           window.alert("You need to provide a valid answer! Please try again!")
           return fightOrSkip();
       }

   if (promptFight === "skip") {
       let confirmSkip = window.confirm("Are you sure you'd like to skip? There is a penalty.");

           if(confirmSkip) {
               window.alert(`${playerInfo.name} has decided to skip this fight.`);
                   playerInfo.Money = Math.max(0,playerInfo.money - 10);
                       console.log(`playerInfo.money, ${playerInfo.money}`)
                       return true;
                       
           }
       }
       return false;
   };

const fight = (enemy) => {
     let isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    while(enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {

        if (fightOrSkip()) {
            break;
        }

    let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0,enemy.health - damage);
    console.log(`${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining.`);
    if (enemy.health <= 0) {
        window.alert(`${enemy.name} has died!`);
        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(`${enemy.name} still has ${enemy.health} health left.`);
    }
} else {
     damage = randomNumber(enemy.attack - 3,enemy.attack);
    playerInfo.health = Math.max(0,playerInfo.health - damage);
    console.log(`${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health remaining.`);
    if (playerInfo.health <= 0) {
        window.alert(`${playerInfo.name} has died!`);
        break; 
    } else {
        window.alert(`${playerInfo.name} still has ${playerInfo.health} health left.`);
    }
    }
    isPlayerTurn = !isPlayerTurn;
}
};


        
 //function to start game
 const startGame = function() {
     playerInfo.reset();

for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert(`Welcome to Robot Gladiators! Round ${(i + 1)}`);
        
    
    var pickedEnemyObj = enemyInfo[i];

     pickedEnemyObj.health = randomNumber(40, 60);

    fight(pickedEnemyObj);

    if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
        storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if(storeConfirm) {
        shop();
    }
}

} else {
    window.alert("You have lost your robot in battle! Game over!");
    break;
    }
  }
  endGame();
 };

 const endGame = () => {
     window.alert("The game has ended! Let's see how you did.");
     let highScore = localStorage.getItem("highscore");
     if (highScore === null) {
         highScore = 0;
     }
     if (playerInfo.money > highScore) {
         localStorage.setItem("highscore", playerInfo.money);
         localStorage.setItem("name", playerInfo.name);
         window.alert(`${playerInfo.name} now has a high score of ${playerInfo.money}!`);
     } else {
         window.alert(`${playerInfo.name} did not beat the high score of ${highScore}. Maybe next time!`);
     }
     let playAgainConfirm = window.confirm("Would you like to play again?");
     if (playAgainConfirm) {
         startGame();
     } else {
         window.alert("Thank you for playing Battlebots! come back soon!");
     }
    };


const shop = () => {
let shopOptionPrompt = window.prompt(`You have $${playerInfo.money}. Would you like to REFILL your health by 20 for $7, UPGRADE your attack by 6 for 7$, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.`);
shopOptionPrompt = parseInt(shopOptionPrompt);
switch(shopOptionPrompt) {
    
    case 1:
        playerInfo.refillHealth();
        break;
    case 2:
        playerInfo.upgradeAttack();
        break;
    case 3:
       window.alert("Leaving the store!")
       break;
    default:
        window.alert("You did not pick a valid option, try again!")
        shop();
        break;

}
};

const getPlayerName = () => {
    let name ="";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log(`Your robot's name is ${name}`);
    return name;
};


let playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if(this.money >= 7) {
            window.alert("Refilling player's health by 20 for $7");
        this.health += 20;
        this.attack-= 7;}
        else {
            window.alert("You don't have enough money.");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 points for $7.");
        this.attack += 6;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
}
};

let enemyInfo = [
    {
    name: "Roberto",
    attack: randomNumber(10, 14)
},
{   name: "Amy Android",
    attack: randomNumber(10, 14)
},
{   name: "Robo Trumble",
    attack: randomNumber(10, 14)
}];
 startGame();