import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999, // Ensures the overlay is on top of everything
  };

  const modalStyle = {
    ...overlayStyle,
    zIndex: 10000, // Ensures the modal content is above the overlay
  };

  const modalContent = {
    backgroundColor: "white",
    borderRadius: "1em",
    padding: "0.5em 2em",
  };

  const hideElement = {
    display: "none",
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ padding: "2em" }}>
      <h1>My App</h1>
      <button onClick={() => toggleModal()}>Toggle Modal</button>
      <Modal style={isOpen ? modalStyle : hideElement}>
        <div id="modal" style={modalContent}>
          <h2>This is a modal</h2>
          <p>Hello, world!</p>
          <p>
            <button onClick={() => toggleModal()}>Close Modal</button>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
