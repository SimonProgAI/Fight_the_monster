class Person{
    constructor(firstName, lastName, dob){
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
        //this.addresses = new Map(); 
    }
    //addAddresses(date, address){
        //this.addresses.set(date.toDateString(), address);
   //}
    //deleteAddresses(date){
        //this.addresses.delete(date);
    //}
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
            I was born on ${this.dob.toDateString()} and I am ${this.age} years old. 
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
};

function  buildCharacter() {
    const outputArea = document.getElementById('outputArea');
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let dobDate = new Date(dob);
    let job = document.getElementById('job').value;
    let id = document.getElementById('id').value;
    //add and deletete skills
    let character1 = new Employee(firstName, lastName, dobDate, job, id);

    let output = `${character1.firstName} ${character1.lastName} ${character1.dob} ${character1.job} ${character1.id} ${character1.greeting()}`;
    
    outputArea.innerText = output;
    
    //console.log(character1);    
}
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
});


/*const character1 = new Employee('John', 'Wick', new Date(1987, 0, 28), 'teacher', 123456);
character1.manageSkills('add','JavaScript');
character1.manageSkills('add','French');
character1.manageSkills('add','Cooking');
character1.manageSkills('delete','Cooking');
console.log(character1.greeting());
console.log(character1);
*/

 