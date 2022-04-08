import React from 'react';

const Modal = ({ onClose, currentTshirt }) => {
  const { title, description, category, index } = currentTshirt;

  return (
    <form className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Add Your Comment Below </h3>
        <div className='modalDiv'>
        <textarea type="text" placeholder="" className="modalInput" id="" />
        </div>
        <button type="button" className='modalButton' onClick={onClose}>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default Modal;