// React component are just ES6 classes
// In React Components - you must define render


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
            options: ['Thing one', 'Thing two', 'Thing 3']
        }
    }


    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
        
    }

    handleAddOption(option) {
        console.log(option);
    }

    render() {

        const title = 'Test App'; 
        const subtitle = 'This is a test subtitle.';


        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
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

/**
 * Contains header component for top of page
 */
class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2> 
            </div>
        );
    }
}

/**
 * Houses button for user to click (and have the program decide for them)
 */
class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
                

            </div>
        );
    }
}

/**
 * 
 * 
 */
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

/**
 * Prints option text to the screen
 */
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}


/**
 * Houses necessary functions to add options to our array
 */
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }


    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            this.props.handleAddOption(option);
        }
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
               </form>

            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));