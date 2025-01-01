//VARIABLES
//--Monster Names Arrays--
let element = [
    'Shadow', 
    'Fire',
    'Moon',
    'Storm',
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
let monsterLevel = Math.floor(Math.random()*10+1);
let monsterHp = monsterLevel * 7;
let monsterStrength = Math.ceil(monsterLevel * 2.3);
let combatActive = true;
//OBJECTS
let player = {
    name: 'John the Valiant',
    hp: playerHp
};
let monster = {
    name: nameGenerator(element, creature),
    hp: Math.max(0, monsterHp),
    level: monsterLevel,
    strength: monsterStrength
};
//COMBAT FUNCTION
function combat(){
    while (combatActive) {
        playerTurn();
        monsterTurn();                
    };
};
//SUPPORTING FUNCTIONS
function playerTurn(){ 
    console.log(`${player.name}'s turn started`);   
    let playerInput = prompt(`
        A level ${monster.level} ${monster.name} attacks ${player.name}! Attack (a) the ${monster.name} back or heal (h) ${player.name}?
    `);
    playerInput;
    if(playerInput !=='a' && playerInput!=='h'){
        console.log(`${player.name} used invalid input`);
        alert('please enter a valid input');
    }else if (playerInput === 'a'){
        console.log(`${player.name} attacks!`);
        attack(1);
        alert(`${player.name} attacks!`)
        combatStat();
    }else if (playerInput ==='h'){
        console.log(`${player.name} heals his wounds!`);
        playerHeal();
        alert(`${player.name} heals his wounds!`);
        combatStat();
    };
    if(monster.hp<1){
        console.log(`${monster.name}'s hp: ${monster.hp} --> ${monster.name} defeated`);
        combatActive = false;
        alert(`${player.name} defeated the ${monster.name}!`);
    };
    console.log(`${player.name} turn ended`);
};
function monsterTurn(){
    console.log(`${monster.name} turn started`);
    if (combatActive){
        console.log(`${monster.name} fights back!`)
        alert(`${monster.name} fights back!`);
        attack(2);
        combatStat();
    };
    if(player.hp<1){
        console.log(`${player.name} hp: ${player.hp} --> ${player.name} defeated`);
        combatActive = false;
        combatStat();
        alert(`${monster.name} defeated the ${player.name}!`);
    };
    console.log(`${monster.name} turn ended`);
};
function combatStat(){
    console.log(`Combat stats: ${monster.name}'s hp: ${monster.hp}, ${player.name}'s hp: ${player.hp}`);
    alert(`${monster.name}'s hp: ${monster.hp}, ${player.name}'s hp: ${player.hp}`);
};
function attack(fighter){
    console.log('attack() called');
    if(fighter==1){//player
        console.log(`Pre-attack - ${monster.name}'s HP: ${monster.hp}.`);      
        let damage = Math.floor((Math.random()*15+monsterLevel));
        monster.hp -= damage;
        monster.hp = Math.max(0, monster.hp);
        console.log(`Post-attack - ${player.name} damage: ${damage}. ${monster.name}'s HP: ${monster.hp}.`);
    }else if(fighter==2){//monster
        console.log(`Pre-attack - ${player.name}'s HP: ${player.hp}.`);
        player.hp -= monster.strength;
        player.hp = Math.max(0, player.hp); 
        console.log(`Post-attack - ${monster.name}'s damage: ${monster.strength}. ${player.name}'s HP: ${player.hp}`);
    };
};
function playerHeal(){
    player.hp += Math.floor(monsterStrength*2);
    console.log(`playerHeal() called, ${player.name}'s HP: ${player.hp}`);
};
//OBJECT RELATED FUNCTIONS
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
//FUNCTION CALL
combat();
