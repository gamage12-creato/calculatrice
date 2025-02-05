import React from "react";

const BoutonCal = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ fontSize: "20px", margin: "5px", padding: "10px" }}>
      {label}
    </button>
  );
};

export default BoutonCal;
