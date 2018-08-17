'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// React component are just ES6 classes
// In React Components - you must define render

// stateless functional component
// doesn't do much - single funct render - simple
// presentation-based components


/**
 * Application that takes user input and randomly chooses one and displays back to the user.
 */
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    // delete options - clear array


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }

        // pick a random option

    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }

        // add an option from user input

    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            // check if empty string
            if (!option) {
                return 'Enter valid value to add.';

                // check if value already exists
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Value already exists';
            }

            console.log('this is an option:' + option);

            this.setState(function (prevState) {
                return {
                    //add options to array
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var title = 'Test App';
            var subtitle = 'This is a test subtitle.';

            console.log(this.state.options);

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options
                    // allows access to this option via the option class
                    , handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// /**
//  * Contains header component for top of page
//  */
// class Header extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

/**
 * Houses button for user to click (and have the program decide for them)
 */
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>


//             </div>
//         );
//     }
// }


var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }


var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText
    );
};

// /**
//  * Prints option text to the screen
//  */
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }


/**
 * Houses necessary functions to add options to our array
 */

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        // state of input options - user input
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    // When form submitted


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            // prevent default form submission
            e.preventDefault();

            var option = e.target.elements.option.value.trim();

            // error from user input
            var error = this.props.handleAddOption(option);

            // if user enteres an error - update the state
            this.setState(function () {
                return {
                    // can use just 'error' since name is same
                    error: error
                };
            });

            /*
            if (option) {
                // Manipulates state
                this.props.handleAddOption(option);
            }
            */
        }
    }, {
        key: 'render',
        value: function render() {
            return (

                // is there an error currently - display to user
                React.createElement(
                    'div',
                    null,
                    this.state.error && React.createElement(
                        'p',
                        null,
                        this.state.error
                    ),
                    React.createElement(
                        'form',
                        { onSubmit: this.handleAddOption },
                        React.createElement('input', { type: 'text', name: 'option' }),
                        React.createElement(
                            'button',
                            null,
                            'Add Option'
                        )
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

/*
//stateless functional component
//faster
// no access to "this"
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: </p>

        </div>
    )
};
*/

//ReactDOM.render(<User name="Andrea"/>, document.getElementById('app'));

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
