import React from 'react';

/**
 * Houses necessary functions to add options to our array
 */
export default class AddOption extends React.Component {

    state = {
        error: undefined
    };


    // When form submitted
    handleAddOption = (e) => {
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
    };

    render() {
        return (

            // is there an error currently - display to user
            <div>

                {this.state.error && <p className="add-option-error">{this.state.error}</p>}

                <form
                    className="add-option" 
                    onSubmit={this.handleAddOption}
                >
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>

            </div>
        );
    }
}