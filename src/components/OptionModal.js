import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOptionModal} // if open or not
                                                 // !! - only real boolean values
            
            onRequestClose={props.handleClearSelectedOption} // if user hits ESC key or background of page to close
            contentLabel="Selected Option" // for accessibility 
            closeTimeoutMS={200} // how long to wait to close
            className="modal"
        >

            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOptionModal && <p className="modal__body">{props.selectedOptionModal}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>

    )
};

export default OptionModal;