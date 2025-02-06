import React from "react";

const Bouton = ({ message, onClick }) => {
  return (
    <button onClick={onClick} style={{ fontSize: "20px", margin: "5px", padding: "10px" }}>
      {message}
    </button>
  );
};

export default Bouton;