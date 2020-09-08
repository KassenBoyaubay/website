import React, { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState("");
  return (
    <div className="mySass Modal">
      <header class="hero">
        <div class="banner">
          <h1>modal project</h1>
          <button class="btn modal-btn" onClick={() => setOpen("open-modal")}>
            open modal
          </button>
        </div>
      </header>
      <div class={`modal-overlay ${open}`}>
        <div class="modal-container">
          <h3>modal content</h3>
          <button class="close-btn" onClick={() => setOpen("")}>
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
