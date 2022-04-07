import React from 'react';

const Modal = ({ onClose, currentTshirt }) => {
  const { title, description, category, index } = currentTshirt;

  return (
    <form className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle"> Add Your Comment Below </h3>
        <input type="text" className="" id="" />
        
        <button type="button" onClick={onClose}>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default Modal;