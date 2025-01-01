//VARIABLES
//--Monster Names--
let element = [
    'Shadow', 
    'Fire',
    'Moon',
    'Wind',
    'Crypt'
];
let creature = [
    'Vampire',
    'Ghost',
    'Zombie',
    'Spectre',
    'Spider',
    'Skeleton',
    'Demon'
];
//--Player, NPC & Combat Variables--
let playerHp = 30;
let monsterLevel=Math.floor(Math.random()*10+1);
let monsterHp = monsterLevel * 7;
let monsterStrength = Math.ceil(monsterLevel * 2.3);
let combatActive=true;
//OBJECTS
let player = {
    name: 'John the Valiant',
    hp: playerHp
};
let monster = {
    name: nameGenerator(element, creature),
    hp: monsterHp,
    level: monsterLevel,
    strength: monsterStrength
};
//FUNCTIONS
function combat(){
    while (combatActive) {
        let playerInput = prompt(`
            The level ${monster.level} ${monster.name} attacks you! Attack (a) or Heal (h)?
        `);
        let statUpdate = alert(`${monster.name} hp: ${monster.hp}, ${player.name} hp: ${player.hp}`);
        let monsterAttack = player.hp -= monster.strength;
        //
        /*1*/playerInput;
        if(playerInput!=='a'&&playerInput!=='h'){
            alert('please enter a valid input');
        }else if (playerInput === 'a'){
            monster.hp -= attack();
        }else if (playerInput ==='h'){
            playerHeal();
        };
        if(monster.hp<1){
            combatActive = false;
            alert(`${player.name} defeated the ${monster.name}!`);
        };
        statUpdate;
        
        /*2*/monsterAttack;
        statUpdate;
        if(player.hp<1){
            combatActive = false;
            alert(`${monster.name} defeated the ${player.name}!`);
        };        
    };
};
combat();
function playerHeal(){
    player.hp += 10;//Math.floor(monsterStrength*2);
};
function attack(){
    //If input from player:
    let value = Math.floor((Math.random()*15+monsterLevel));
    return value;
    //If input from monster:
    //player.hp -= monster.strength
};
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
//DISCARDED FUNCTIONS
/*
function monsterLevelStats(monsterLevel, statType){
    let value = monsterLevel * Math.floor((Math.random()*monsterLevel)+statType);
    return value;
};
*/
