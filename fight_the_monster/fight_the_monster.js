//VARIABLES
//--Monster Names--
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
//FUNCTIONS
function combat(){
    while (combatActive) {
        let playerInput = prompt(`
            A level ${monster.level} ${monster.name} attacks ${player.name}! Attack (a) the ${monster.name} back or heal (h) ${player.name}?
        `);
        //
        
        /*1*/
        playerInput;
        if(playerInput !=='a' && playerInput!=='h'){
            alert('please enter a valid input');
        }else if (playerInput === 'a'){
            attack(1);
        }else if (playerInput ==='h'){
            playerHeal();
        };
        let statUpdate = alert(`${monster.name}'s hp: ${monster.hp}, ${player.name}'s hp: ${player.hp}`);
        statUpdate;
        if(monster.hp<1){
            combatActive = false;
            alert(`${player.name} defeated the ${monster.name}!`);
        };

        /*2*/
        attack(2);
        statUpdate;
        if(player.hp<1){
            combatActive = false;
            alert(`${monster.name} defeated the ${player.name}!`);
        };        
    };
};
function playerHeal(){
    player.hp += Math.floor(monsterStrength*2);
};
function attack(fighter){
    if(fighter==1){//player      
        let damage = Math.floor((Math.random()*15+monsterLevel));
        monster.hp -= damage;
        monster.hp = Math.max(0, monster.hp);
    }else if(fighter==2){//monster
        player.hp -= monster.strength;
        player.hp = Math.max(0, player.hp);
    };
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

combat();
