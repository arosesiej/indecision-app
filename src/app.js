// install -> import -> use
// install: using npm or yarn to install
// import: look at documentation on what modules we need
// use - call in a function

// provide the module name
// webpack knows what we need and not need to include unnecessary code

//ES6 syntax
//ReactDOM - default export
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';

// React component are just ES6 classes
// In React Components - you must define render. 

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

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