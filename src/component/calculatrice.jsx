import React from "react";
import calculReducer from "./calculReducer";
import BoutonCal from "./BoutonCal";
import InputCal from "./inputCal";

const Calculatrice = () => {
  const [state, dispatch] = calculReducer();

  const nombre = (nomber) => {
    dispatch({ type: "ADD_NUMBER", payload: nomber });
  };

  const operation = (operation) => {
    dispatch({ type: "SET_OPERATION", payload: operation });
  };

  const calcule = () => {
    dispatch({ type: "CALCULE" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Calculatrice</h2>

      <InputCal input={state.input} calculation={state.calculation} />

      <div>
        {[7, 8, 9].map((num) => (
          <BoutonCal key={num} label={num} onClick={() => nombre(num.toString())} />
        ))}
      </div>
      <div>
        {[4, 5, 6].map((num) => (
          <BoutonCal key={num} label={num} onClick={() => nombre(num.toString())} />
        ))}
      </div>
      <div>
        {[1, 2, 3].map((num) => (
          <BoutonCal key={num} label={num} onClick={() => nombre(num.toString())} />
        ))}
      </div>
      <div>
        <BoutonCal label="0" onClick={() => nombre("0")} />
      </div>

      <div>
        <BoutonCal label="+" onClick={() => operation("+")} />
        <BoutonCal label="-" onClick={() => operation("-")} />
        <BoutonCal label="*" onClick={() => operation("*")} />
      </div>

      <div>
        <BoutonCal label="=" onClick={calcule} />
        <BoutonCal label="Reset" onClick={reset} />
      </div>
    </div>
  );
};

export default Calculatrice;
