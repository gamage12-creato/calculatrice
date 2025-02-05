import { useReducer } from "react";

const initialState = {
  input: "", 
  calculation: "", 
  result: null, 
  operator: null, 
};

const calcReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return { ...state, input: state.input + action.payload };

    case "SET_OPERATION":
      if (state.input === "") return state;
      return {
        ...state,
        calculation: state.input + " " + action.payload,
        result: state.input,
        input: "",
        operator: action.payload,
      };

    case "CALCULE":
      if (state.input === "" || state.result === null) return state;
      let newResult;
      switch (state.operator) {
        case "+":
          newResult = Number(state.result) + Number(state.input);
          break;
        case "-":
          newResult = Number(state.result) - Number(state.input);
          break;
        case "*":
          newResult = Number(state.result) * Number(state.input);
          break;
        default:
          return state;
      }
      return {
        ...state,
        input: newResult.toString(),
        calculation: `${state.calculation} ${state.input} = ${newResult}`,
        result: newResult,
        operator: null,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const calculReducer = () => useReducer(calcReducer, initialState);

export default calculReducer;
