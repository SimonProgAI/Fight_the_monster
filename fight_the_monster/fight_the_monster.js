
/*VICTORY CONDITION 
- reach 'X' XP 
- hp >= 1
*/


//VARIABLES
let element = [
    'Shadow', 
    'Fire',
    'Water',
    'Wind',
    'Earth'
];
let creature = [
    'Vampire',
    'Ghost',
    'Zombie',
    'Apparition',
    'Spider',
    'Skeleton',
    'Demon'
];
let playerHp = 100;
let playerXp = 100;
let monsterLevel=Math.floor(Math.random()*10+1);
let monsterHp = monsterLevel * 7;
let monsterStrength = monsterLevel * 0.65;
//let xp = 100;

//OBJECTS
let player = {
    'xp': playerXp, // Gained from Combat or spent on healing
    'hp': playerHp, // increased by X after defeating a monster
    'strength': attack(playerXp), // increased per every X amount of XP
};
let monster = {
    'name': nameGenerator(element, creature),
    'level': monsterLevel, //directly tied to player XP/level
    'hp': monsterHp,//monsterLevelStats(level, hp),
    'strength': monsterLevelStats(monsterLevel, monsterStrength),
};

//MAJOR FUNCTIONS 
let playerInput = prompt(`
    You are attacked by a ${monster.name}! Attack (a) or Heal (h)?
`);
let combatActive = true;  

while (combatActive){
    playerInput;
    if (playerInput === 'a'){
        //attack
    }else if (playerInput === 'h'){
        //heal
    }else {
        return "Please enter 'a' to attack or 'h' to heal";
    };

    if (monster.hp<=0){//victory condition
        combatActive = false;
        return 'You defeated the monster!';
    };

    let monsterAttack = atttack(100);

    if(player.hp===0){//defeat condition
        return 'You were defeated!';
        break;

    }
};
//Combat itself...
//Turn-based
//damage dealt-->modify both monster and player hp
//XP dropped


function playerHeal(n){ // Not working right now
    
    playerXp = playerXp - n;
    playerHp = playerHp + n;
    return player;
    //Can't heal over the cap
};

function playerXP() {
    
};
function monsterLevelStats(monsterLevel, statType){
    let value = monsterLevel * Math.floor((Math.random()*monsterLevel)+statType);
    return value
};
function attack(playerXp){
    let value = Math.floor((Math.random()*30+(playerXp/5)));
    return monsterHp - value;
};

//MINOR FUNCTIONS
function nameGenerator(first, last){
    return randomIndex_ArrObj(first) + ' ' + randomIndex_ArrObj(last);
};
function randomIndex_ArrObj(obj){  
    function randomIndex (a) {
        return Math.floor(Math.random()*a.length);
    };
    if (obj.constructor === Array){
        return obj[randomIndex(obj)];
    }else if (obj.constructor === Object){
        let entries = Object.entries(obj);
        let [key, value] = entries[randomIndex(entries)];
        return `${key}: ${value}`;
    }else {
        return 'Input must be an array or object.';
    };
};





console.log(attack(100));
console.log(monster);



