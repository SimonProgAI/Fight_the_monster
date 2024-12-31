
/*Gameplay Loop 
1
--Monster.Name attacks you!
--playerHealth displayed
--Monster health displayed
--a or h? playerInput

[:
2
--You just ${playerInput}
--Updated player and monster stats

3
--Monster just attacked you.
--Updated player and monster stats
:]

4
--Monster or Player defeated

Working right now:
attack  (but does not modify the monster object)
playerHeal 
nameGenerator

*/


//VARIABLES

//--Monster Names--
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
//--Player & NPC Variables--
let playerHp = 100;
let monsterLevel=Math.floor(Math.random()*10+1);
let monsterHp = monsterLevel * 7;
let monsterStrength = Math.ceil(monsterLevel * 2.3);

//OBJECTS

let player = {
    name: 'John the Valiant',
    hp: playerHp,

}

let monster = {
    name: nameGenerator(element, creature),
    hp: monsterHp,
    level: monsterLevel,
    strength: monsterStrength
};
//--Function related variables
let playerInput = console.log(`
    A level ${monster.level} ${monster.name} attacks you! Attack (a) or Heal (h)?
`);
let combatActive = true;



//MAJOR FUNCTIONS 

/* 
function combat(){
    while (combatActive){
        playerInput
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
};
*/
function playerHeal(){
    player.hp += Math.ceil(monsterStrength*0.8);
    return player.hp;
};
/*
function monsterLevelStats(monsterLevel, statType){
    let value = monsterLevel * Math.floor((Math.random()*monsterLevel)+statType);
    return value;
};
*/
function attack(){
    //If input from player:
    let value = Math.floor((Math.random()*15+monsterLevel));
    return value;
    //If input from monster:
    //player.hp -= monster.strength
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




console.log(monster);
monster.hp -= attack();
console.log(monster);
monster.hp -= attack();
console.log(monster);
playerHeal();
console.log(player);
playerHeal();
console.log(player);




