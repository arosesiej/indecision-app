// arguments object - no longer bound with arrow functions
// cannot access argument?

/*
const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
*/

/* DOES NOT WORK - ARROW FUNCTIONS NO ACCESS TO ARGUMENTS
const add = (a,b) => {
    console.log(arguments);
    return a + b;
}


console.log(add(55, 1));

*/


// this keyword - no longer bound with arrow functions
// normally functions 'this' bound to the object


const user = {
    name: 'andrea',
    cities: ['ashley', 'wb', 'kingston'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        /*
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
        */
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => {
            return number * this.multiplyBy;
        });
    }


    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - function that returns new array where product is
}

console.log(multiplier.multiply());