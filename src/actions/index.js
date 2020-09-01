export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number, // data
  };
};

export const decrement = (number) => {
  return {
    type: "DECREMENT",
    payload: number, // data
  };
};
