import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOptionModal} // if open or not
                                                 // !! - only real boolean values
            
            onRequestClose={props.handleClearSelectedOption} // if user hits ESC key or background of page to close
            contentLabel="Selected Option" // for accessibility 
        >

            <h3>Selected Option</h3>
            {props.selectedOptionModal && <p>{props.selectedOptionModal}</p>}
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>

    )
};

export default OptionModal;