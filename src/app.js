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

const template = <p>This is JSX from Webpack</p>;
ReactDOM.render(template, document.getElementById("app"));