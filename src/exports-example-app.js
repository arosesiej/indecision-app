//import './utils.js';
// grab function from file

// default export 1st then {named exports}
// can name then reference default as any name you want
// typically biggest function / react component should be default
// smaller, additional helpers can be named
import subtract, { square, add } from './utils.js';
import isSenior, {isAdult, canDrink} from './person.js';


console.log("app.js is running");


// named exports
console.log(square(4));
console.log(add(100,23));
console.log(isAdult(18));
console.log(canDrink(18));

// default export
console.log(subtract(100,50));
console.log(isSenior(66));