import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={onClose}>
                            &times;
                        </button>
                        <h4 className="modal-title">Write a Review</h4>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;