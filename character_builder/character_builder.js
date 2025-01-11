class Person{
    constructor(firstName, lastName, dob/* new Date(yyyy, mm, dd)*/){
        if(typeof firstName!='string'||firstName.length<1||firstName.length>50){
            console.log('Please enter a valid first name');
            return;
        }    
        if(typeof lastName!='string'||lastName.length<1||lastName.length>50){
            console.log('Please enter a valid last name');
            return;
        }
        if (dob.constructor != Date||isNaN(dob)){
            console.log('Please use yyyy, mm, dd');
            return;
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.age = this.calculateAge();
        this.generation = this.calculateGeneration();
        this.addresses = new Map(); 
    }
    addAddresses(date, address){
        this.addresses.set(date.toDateString(), address);
    }
    deleteAddresses(date){
        this.addresses.delete(date);
    }
    calculateAge(){
        let today = new Date();
        let age = today.getFullYear() - this.dob.getFullYear();
        let monthDiff = today.getMonth()- this.dob.getMonth();
        if(monthDiff < 0 || monthDiff===0 && today.getDate() < this.dob.getDate()){
            age--;
        };
        return age;
    }
    calculateGeneration(){
        let generations = [
            { start: -100000, end: 1899, name: 'the Immortal Highlanders Generation'},
            { start: 1900, end: 1924, name: 'the Greatest Generation'},
            { start: 1925, end: 1945, name: 'the Silent Generation'},
            { start: 1946, end: 1964, name: 'the Baby Boomers'},
            { start: 1965, end: 1979, name: 'Generation X'},
            { start: 1980, end: 1994, name: 'the Millenial Generation'},
            { start: 1995, end: 2012, name: 'Generation Z'},
            { start: 2013, end: 2024, name: 'Generation Alpha'},
            { start: 2025, end: 2039, name: 'Generation Beta'},
            { start: 2040, end: Infinity, name: 'the Space Colonization Generation'}
        ]

        for(let generation of generations){
            let dobYear = this.dob.getFullYear();
            if (generation.start<=dobYear&&generation.end>=dobYear){
                return generation.name;
            }; 
        };
        
    }
    greeting(){
        return `
            Hello, I am ${this.firstName} ${this.lastName}. 
            I was born on ${this.dob.toDateString()} and I am ${this.age}. 
            My generation is ${this.generation}.
        `;
    }
};
class Employee extends Person {
    constructor(firstName, lastName, dob, job, id){
        super(firstName, lastName, dob);
        this.job = job;
        this.id = id;
        this.skills = new Set();
    }
    manageSkills(add_or_delete, skill){
        switch(add_or_delete){
            case 'add':
                this.skills.add(skill);
                break;
            case 'delete':
                this.skills.delete(skill);
                break;
            default:
                return 'please enter "add" or "delete"';
        };   
    }
    greeting(){
        return `
            ${super.greeting()}
            I am a ${this.job}, employee id: ${this.id}.   
        `;
    }
}
const PERSON1 = new Employee('John', 'Wick', new Date(1987, 0, 28), 'teacher', 123456);
PERSON1.manageSkills('add','JavaScript');
PERSON1.manageSkills('add','French');
PERSON1.manageSkills('add','Cooking');
PERSON1.manageSkills('delete','Cooking');
PERSON1.addAddresses((new Date(1995,8,20)), {address: 2130, street: 'Forest'});
console.log(PERSON1.greeting());
console.log(PERSON1);


 