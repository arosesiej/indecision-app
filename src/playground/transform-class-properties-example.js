//example of before and after installing
//transform-class-properties a babel plugin
class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }
    getGreeting() {
        
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// ----------------

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        //no this binding in arrow functions
        return `Hi. My name is ${this.name}.`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());