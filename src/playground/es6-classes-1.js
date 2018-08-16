class Person {
    // constructor
    // function defaults:
    // if name exists use the name, if not then default to 'Anonymous'
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${ this.name }!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// Student is a subclass of Person - extends
// Gets all of the stuff from Person and can override things that differ
class Student extends Person {

    constructor(name, age, major) {
        // refers to the super class 
        super(name, age); // calls the parent constructor
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    // override for students!
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }

}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }


    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        
        return greeting;

    }
}


// creating a new instance of Person
const me = new Person('Andrea Siejna', 24);
const other = new Person();

console.log(me.getDescription());
console.log(other.getDescription());

const stud1 = new Student('Student Studentson', 18, 'Mathematics');
const stud2 = new Student('Work Workinson', 30);

console.log(stud1);
console.log(stud1.getDescription());
console.log(stud1.hasMajor());

console.log(stud2);
console.log(stud2.getDescription());
console.log(stud2.hasMajor());


const zelda = new Traveler('Zelda', 25, 'Hyrule');
console.log(zelda.getGreeting());

const link = new Traveler ('Link', 1000);
console.log(link.getGreeting());

const ganon = new Traveler (undefined, undefined, "Nowhere");
console.log(ganon.getGreeting());