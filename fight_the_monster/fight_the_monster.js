
//VICTORY CONDITION --> reach 'X' XP 

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
let health = level * 7;
let strength = level * 0.85;
let block = level * 0.85;

//MAJOR FUNCTIONS 
function combat(){
    //victory condition
    //defeat condition
    //damage dealt-->modify both monster and player health
    //XP dropped
};
function heal(){
    //heal using XP points
};
function XP() {
    //
};
function levelStats(level, statType){
    let value = level * Math.floor((Math.random()*level)+statType);
    return value
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
let playerStats = {
    'name': 'John Doe', //from an input in the DOM
    'XP': 1, // Gained from Combat or spent on healing
    'health': levelStats(level, health), // increased per every X amount of XP
    'strength': levelStats(level, strength), // increased per every X amount of XP
    'block': levelStats(level, block) // increased per every X amount of XP
};
let monster = {
    'name': nameGenerator(element, creature),
    'level': level, //directly tied to player XP/level
    'health': levelStats(level, health),
    'strength': levelStats(level, strength),
    'block': levelStats(level, block)
};

console.log(monster);

