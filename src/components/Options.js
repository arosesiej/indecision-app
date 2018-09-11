import React from 'react';
import Option from './Option.js';

const Options = (props) => {

    // when options array empty - display
    return (
        <div>
            <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}>
            Remove All
            </button>
            
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

export default Options;