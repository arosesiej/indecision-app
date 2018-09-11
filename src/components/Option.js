import React from 'react';

/**
 * 
 * Singular option
 */
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

//const definitions cant be inline default exported

export default Option;