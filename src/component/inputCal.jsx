import React from "react";

const InputCal = ({ input, calculation }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <div style={{ fontSize: "24px", marginBottom: "5px" }}>{calculation}</div>
      <input
        type="text"
        value={input}
        readOnly
        style={{ fontSize: "24px", textAlign: "right", width: "200px", padding: "5px" }}
      />
    </div>
  );
};

export default InputCal;
