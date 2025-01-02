class Person{
    constructor(firstName, lastName, dob/* new Date(yyyy, mm, dd)*/){
        let fullName = this.firstName + this.lastName
        if(typeof fullName!== 'string' || fullName.length<1 || fullName.length>50){
            console.log('Please enter between 1 and 50 letters');
            return 'Please enter between 1 and 50 letters';
        };
        if (dob.constructor !== Date||isNaN(dob)){
            return 'Please use yyyy, mm, dd'
        };  
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.age = this.calculateAge();
        this.generation = this.calculateGeneration(); 
    }
    calculateAge(){
        let today = new Date();
        let age = today.getFullYear() - this.dob.getFullYear();
        let monthDiff = today.getMonth()- this.dob.getMonth();
        if(monthDiff < 0 || monthDiff===0 && today.getDate() < this.dob.getDate()){
            age--;
        }
        return age;
    }
    calculateGeneration(){
        let dobYear = this.dob.getFullYear(); 
        if (dobYear>=2025){
            return 'Generation Beta';
        }else if(dobYear<=2024 && dobYear>=2013){
            return 'Generation Alpha';
        }else if(dobYear<=2012 && dobYear>=1995){
            return 'Generation Z';
        }else if (dobYear<=1994 && dobYear>=1980){
            return 'Millenial';
        }else if (dobYear<=1979 && dobYear>=1965){
            return 'Generation X';
        }else if (dobYear<=1964 && dobYear>=1946){
            return 'Baby Boomer';
        }else if (dobYear<=1945 && dobYear>=1925){
            return 'Silent Generation';
        }else if (dobYear<=1901 && dobYear>=1924){
            return 'Greatest Generation';
        }else {
            return 'Immortal Highlander';
        };
    }
    greeting(){
        return `
          Hello, I am ${this.firstName} ${this.lastName}. 
          I was born on ${this.dob} and I am ${this.age}. 
          My generation is ${this.generation}.`;
    }
};

const PERSON1 = new Person(1234, 1233, new Date(1478, 0, 28));
console.log(PERSON1.greeting());

