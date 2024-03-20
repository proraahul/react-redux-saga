const ADD_NUMBER_ONE = "ADD_NUMBER_ONE";
const ADD_NUMBER_TWO = "ADD_NUMBER_TWO";
const OPERATOR = "OPERATOR";

export const addNumberOneAction = (number) => {
  return {
    type: ADD_NUMBER_ONE,
    payload: number,
  };
};

export const addNumberTwoAction = (number) => {
  return {
    type: ADD_NUMBER_TWO,
    payload: number,
  };
};

export const operatorAction = (operator) => {
  return {
    type: "OPERATOR",
    payload: operator,
  };
};
