import React from 'react';

/**
 * Houses necessary functions to add options to our array
 */
export default class AddOption extends React.Component {

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
        console.log(testtings);

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