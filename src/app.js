// React component are just ES6 classes
// In React Components - you must define render

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
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

    render() {

        const title = 'Test App'; 
        const subtitle = 'This is a test subtitle.';


        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options 
                    options={this.state.options}
                    // allows access to this option via the option class
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}


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

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.handlePick}
                    disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
                

            </div>
        );
    }
}

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

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
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