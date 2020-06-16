let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let enemyHealth = 50;
let enemyAttack = 12;
let promptFight = "";
let playerMoney = 10;
let confirmSkip = "";
let enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];

let fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose!").toLowerCase();
    if (promptFight === "fight") {
    enemyHealth = (enemyHealth - playerAttack);
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);
    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has died!`);
    } else {
        window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }
    playerHealth = (playerHealth - enemyAttack);
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
    if (playerHealth <= 0) {
        window.alert(`${playerName} has died!`); 
    } else {
        window.alert(`${playerName} still has ${playerHealth} health left.`);
    }
} else if (promptFight === "skip") {
    confirmSkip = window.confirm("Are you sure you'd like to skip? There is a penalty.");
    if(confirmSkip) {
        window.alert(`${playerName} has decided to skip this fight.`);
        playerMoney = (playerMoney - 2);
    } else { 
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}

    
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}