
/*VICTORY CONDITION 
- reach 'X' XP 
- HP >= 1
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
let level=Math.floor(Math.random()*10+1);
let HP = level * 7;
let strength = level * 0.65;
let xp = 100;

//MAJOR FUNCTIONS 
function combat(){
    if(player.HP===0){//defeat condition
        return 'You were defeated!';
    }else if (monster.HP===0){//Victory condition
        return 'You defeated the monster!'
    };
    //Combat itself...
    //Turn-based
    //damage dealt-->modify both monster and player HP
    //XP dropped
};
function playerHeal(){

    //heal using XP points
    //HP cap?
};
function playerXP() {
    //
};
function monsterLevelStats(level, statType){
    let value = level * Math.floor((Math.random()*level)+statType);
    return value
};
function playerStrength(xp){
    let value = Math.floor((Math.random()*30+(xp/5)));
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
    'XP': xp, // Gained from Combat or spent on healing
    'HP': 100, // increased per every X amount of XP
    'strength': playerStrength(xp), // increased per every X amount of XP
};
let monster = {
    'name': nameGenerator(element, creature),
    'level': level, //directly tied to player XP/level
    'HP': 0,//monsterLevelStats(level, HP),
    'strength': monsterLevelStats(level, strength),
};


console.log(combat());

