import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js';

// stateless functional component
// doesn't do much - single funct render - simple
// presentation-based components

/**
 * Application that takes user input and randomly chooses one and displays back to the user.
 */
export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOptionModal: undefined
    };

    // delete all options - clear array
    handleDeleteOptions = () => {

        this.setState(() => ({ options: [] }));

        // same as ^^^ but cleaner and more concise
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOptionModal: undefined
        }));
    }



    // deletes a single option
    handleDeleteOption = (optionToRemove) => {

        //set to old option value
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                //true if keep item in array - false to remove
                // see if option = arg thats passed in
                // if the option we want to remove isnt the same as the current option
                return optionToRemove !== option;
            })
        }));
    };



    // pick a random option
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOptionModal: option
        }));

    };

    // add an option from user input
    handleAddOption = (option) => {

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


    };












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

                <OptionModal 
                    selectedOptionModal={this.state.selectedOptionModal}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
