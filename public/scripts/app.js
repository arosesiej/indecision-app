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
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

        _this.state = {
            options: props.options
        };
        return _this;
    }

    //Lifecycle method
    // fires when component first mounts to DOM


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            // in case invalid json / js 
            try {

                // retrieve item from local storage
                var json = localStorage.getItem('options');
                // turn back into JS obj [array]
                var options = JSON.parse(json);

                // if there are options and not null / new
                if (options) {
                    // fetching out of local storage and populating the array
                    this.setState(function () {
                        return { options: options };
                    });
                }

                console.log('componentDidMount! ~ fetching data');
            } catch (e) {
                // do nothing if invalid json data
                // falls back to empty array if so
            }
        }

        //Lifecycle method
        // when state or prop values change

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {

            // if old state object has a diff length than the current one
            // only then save
            if (prevState.options.length !== this.state.options.length) {
                // convert to string
                var json = JSON.stringify(this.state.options);
                // save in local storage
                localStorage.setItem('options', json);

                console.log('componentDidUpdate! ~ saving data');
            }
        }

        //Lifecycle method
        // fires before component goes away
        // used for app w multiple pages - would trigger when new page possibly

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount!');
        }

        // delete all options - clear array

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {

            this.setState(function () {
                return { options: [] };
            });

            // same as ^^^ but cleaner and more concise
            // this.setState(() => {
            //     return {
            //         options: []
            //     };
            // });
        }

        // deletes a single option

    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {

            //set to old option value
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        //true if keep item in array - false to remove
                        // see if option = arg thats passed in
                        // if the option we want to remove isnt the same as the current option
                        return optionToRemove !== option;
                    })
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

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            console.log(this.state.options);

            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options
                    // allows access to this option via the option class
                    , handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Test App',
    subtitle: 'Subtitle'
};

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

var Options = function Options(props) {

    // when options array empty - display
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to begin.'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'remove'
        )
    );
};

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
                return { error: error };
            });

            // clear input if there was an error
            if (!error) {
                e.target.elements.option.value = '';
            }
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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
