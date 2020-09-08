import React, { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState("");
  return (
    <div className="mySass Modal">
      <header className="hero">
        <div className="banner">
          <h1>modal project</h1>
          <button
            className="btn modal-btn"
            onClick={() => setOpen("open-modal")}
          >
            open modal
          </button>
        </div>
      </header>
      <div className={`modal-overlay ${open}`}>
        <div className="modal-container">
          <h3>modal content</h3>
          <button className="close-btn" onClick={() => setOpen("")}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
