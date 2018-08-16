
// ES5 Function
/*
function square(x) {
    return x * x;
};

console.log(square(8));
*/

//ES6 Function
// You cannot define a name function - they're all anonymous
// You have to assign the function to a variable
/* 
const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(8));
*/

// if only returns one expression you can make it more concise
// implicitly returned
//const squareArrow = (x) => x*x;

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName("Andrea Siejna"));