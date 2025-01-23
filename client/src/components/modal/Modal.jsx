import React from "react";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
