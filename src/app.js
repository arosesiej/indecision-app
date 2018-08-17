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

        this.state = {
            options: props.options
        }
    }

    // delete options - clear array
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
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

        console.log('this is an option:' + option);

        this.setState((prevState) => {
            return {
                //add options to array
                options: prevState.options.concat((option))
            };
        });
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

Header.defaultProps =  {
  title: 'Test App',
  subtitle: 'Subtitle'  
};

const Action = (props) => {
    return(
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
    return (
        <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {
                    props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
    );
};




const Option = (props) => {
    return (
        <div>
            {props.optionText}
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
        this.setState(() => {
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