let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let enemyHealth = 50;
let enemyAttack = 12;
let promptFight = "";
let playerMoney = 100;
let confirmSkip = "";
let pickedEnemyName = "";
let enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];

let fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
    promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose!").toLowerCase();
    if (promptFight === "skip") {
        confirmSkip = window.confirm("Are you sure you'd like to skip? There is a penalty.");
        if(confirmSkip) {
            window.alert(`${playerName} has decided to skip this fight.`);
            playerMoney -= 10;
            console.log(`playerMoney, ${playerMoney}`)
            break;
        }
    }
    enemyHealth = (enemyHealth - playerAttack);
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);
    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has died!`);
        break;
    } else {
        window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }
    playerHealth = (playerHealth - enemyAttack);
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
    if (playerHealth <= 0) {
        window.alert(`${playerName} has died!`);
        break; 
    } else {
        window.alert(`${playerName} still has ${playerHealth} health left.`);
    }
    }
};
        
 //function to start game
 const startGame = function() {
     playerHealth = 100;
     playerAttack = 10;
     playerMoney = 100;

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert(`Welcome to Robot Gladiators! Round ${(i + 1)}`);
    
    pickedEnemyName = enemyNames[i];

    enemyHealth = 50;

    fight(pickedEnemyName);
    if(playerHealth > 0 && i < enemyNames.length - 1) {
        let storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if(storeConfirm) {
        shop();
    }
};

} else {
    window.alert("You have lost your robot in battle! Game over!");
    break;
    }
  }
  endGame();
 };

 const endGame = () => {
     if (playerHealth > 0) { 
         window.alert(`Great job, you've survied the game! You now have a score of ${playerMoney}.`);
     } else {
         window.alert("You have lost your robot in battle.");
     }
 let playAgainConfirm = window.confirm("Would you like to play again?");

 if (playAgainConfirm) {
     startGame();
 } else {
     window.alert("Thank you for playing Robot Gladiators!");
 }
};

const shop = () => {
let shopOptionPrompt = window.prompt(`You have $${playerMoney}. Would you like to REFILL your health by 20 for $7, UPGRADE your attack by 6 for 7$, or LEAVE the store? Please choose one: REFILL, UPGRADE, or LEAVE.`).toLowerCase();
switch(shopOptionPrompt) {
    case "refill":
        if (playerMoney >= 7 ) {
        window.alert("Refilling player's health by 20 for $7")
        playerHealth += 20;
        playerMoney -= 7;
        window.alert(`${playerName} now has ${playerHealth} health and $${playerMoney}.`) }
        else {
            window.alert("You dont have enough money!");
        }
        break;
    case "upgrade":
        if(playerMoney >= 7) {
        window.alert(`Increasing ${playerName}'s attack by 6 for $7`)
        playerAttack += 6;
        playerMoney -= 7; 
        window.alert(`${playerName} now has ${playerAttack} attack and $${playerMoney}.`)}
        else {
            window.alert("You dont have enough money!")
        }
        break;
    case "leave":
       window.alert("Leaving the store!")
       break;
    default:
        window.alert("You did not pick a valid option, try again!")
        shop();
        break;

}
};

 startGame();