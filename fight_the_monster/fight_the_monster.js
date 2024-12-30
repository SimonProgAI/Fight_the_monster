
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
let playerXp = 100;
let playerHp = 100;
let level=Math.floor(Math.random()*10+1);
let hp = level * 7;
let strength = level * 0.65;
//let xp = 100;

//MAJOR FUNCTIONS 
function combat(){
    if(player.hp===0){//defeat condition
        return 'You were defeated!';
    }else if (monster.hp===0){//victory condition
        return 'You defeated the monster!'
    };
    //Combat itself...
    //Turn-based
    //damage dealt-->modify both monster and player hp
    //XP dropped
};
function playerHeal(n){ // Not working right now
    
    playerXp = playerXp - n;
    playerHp = playerHp + n;
    return player;
    //Can't heal over the cap
};
function playerXP() {
    
};
function monsterLevelStats(level, statType){
    let value = level * Math.floor((Math.random()*level)+statType);
    return value
};
function playerStrength(playerXp){
    let value = Math.floor((Math.random()*30+(playerXp/5)));
    return value;
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


//OBJECTS
let player = {
    'xp': playerXp, // Gained from Combat or spent on healing
    'hp': playerHp, // increased by X after defeating a monster
    'strength': playerStrength(playerXp), // increased per every X amount of XP
};
let monster = {
    'name': nameGenerator(element, creature),
    'level': level, //directly tied to player XP/level
    'hp': 0,//monsterLevelStats(level, hp),
    'strength': monsterLevelStats(level, strength),
};


console.log(playerHeal(20));



