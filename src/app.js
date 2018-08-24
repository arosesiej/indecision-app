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

const Layout = () => {
    return {
        <div>
            <p>header</p>
            <p>footer</p>
        </div>
    };
}


ReactDOM.render(<Layout />, document.getElementById('app'));

