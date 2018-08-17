// React component are just ES6 classes
// In React Components - you must define render

// stateless functional component
// doesn't do much - single funct render - simple
// presentation-based components


/**
 * Application that takes user input and randomly chooses one and displays back to the user.
 */
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: props.options
        }
    }

    //Lifecycle method
    // fires when component first mounts to DOM
    componentDidMount() {

        // in case invalid json / js 
        try {

            // retrieve item from local storage
            const json = localStorage.getItem('options');
            // turn back into JS obj [array]
            const options = JSON.parse(json);


            // if there are options and not null / new
            if (options) {
                // fetching out of local storage and populating the array
                this.setState(() => ({ options }));
            }

            console.log('componentDidMount! ~ fetching data');

        } catch (e) {
            // do nothing if invalid json data
            // falls back to empty array if so
        }


    }

    //Lifecycle method
    // when state or prop values change
    componentDidUpdate(prevProps, prevState) {

        // if old state object has a diff length than the current one
        // only then save
        if (prevState.options.length !== this.state.options.length) {
            // convert to string
            const json = JSON.stringify(this.state.options);
            // save in local storage
            localStorage.setItem('options', json);

            console.log('componentDidUpdate! ~ saving data');
        }

    }

    //Lifecycle method
    // fires before component goes away
    // used for app w multiple pages - would trigger when new page possibly
    componentWillUnmount() {
        console.log('componentWillUnmount!')
    }

    // delete all options - clear array
    handleDeleteOptions() {

        this.setState(() => ({ options: [] }));

        // same as ^^^ but cleaner and more concise
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
    }

    // deletes a single option
    handleDeleteOption(optionToRemove) {

        //set to old option value
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                //true if keep item in array - false to remove
                // see if option = arg thats passed in
                // if the option we want to remove isnt the same as the current option
                return optionToRemove !== option;
            })
        }));
    }



    // pick a random option
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);

    }

    // add an option from user input
    handleAddOption(option) {

        // check if empty string
        if (!option) {
            return 'Enter valid value to add.';

            // check if value already exists
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Value already exists';
        }


        this.setState((prevState) => ({
            options: prevState.options.concat((option))
        }));


    }

    render() {

        console.log(this.state.options);

        return (
            <div>
                <Header />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    // allows access to this option via the option class
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Test App',
    subtitle: 'Subtitle'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};


const Options = (props) => {

    // when options array empty - display
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            
            {props.options.length === 0 && <p>Please add an option to begin.</p>}

            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};


/**
 * Houses necessary functions to add options to our array
 */
class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        // state of input options - user input
        this.state = {
            error: undefined
        };
    }

    // When form submitted
    handleAddOption(e) {
        // prevent default form submission
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        // error from user input
        const error = this.props.handleAddOption(option);

        // if user enteres an error - update the state
        this.setState(() => ({ error }));

        // clear input if there was an error
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (

            // is there an error currently - display to user
            <div>

                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>



            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));