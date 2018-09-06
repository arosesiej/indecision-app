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

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
}

ReactDOM.render(
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
, document.getElementById('app'));

