console.log('utils.js is running');

//named exports
export const square = (x) => x*x;
export const add = (a,b) => a+b;

//default exports - CAN ONLY HAVE ONE
const subtract = (a,b) => a-b;
export default subtract;

// alt syntax
// export default (a,b) => a-b;


// alternate syntax
//
// export {
//     square,
//     add,
//     subtract as default
// }

// exports - default export - named exports
// alt syntax - export { square, add }
// must have variable declaration to export