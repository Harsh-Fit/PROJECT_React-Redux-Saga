import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants";

const initialState = [];

export const cartData = (data = initialState, action) => {
  let dataCopy = [...data];

  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART Condition ", action);
      return [...dataCopy, action.data];

    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART Condition ", action);
      console.log(action.data, dataCopy);

      const remainingItems = dataCopy.filter((item) => {
        console.log("Inside", item, action.data);
        return item.id !== action.data;
      });
      console.log("REMAIN", remainingItems);
      return [...remainingItems];

    // dataCopy.pop();
    // return dataCopy;

    //NOT WORK// return (dataCopy.length = dataCopy.length ? dataCopy.length - 1 : []);

    case EMPTY_CART:
      // console.warn("EMPTY CART Condition ", action);
      dataCopy = [];
      return [...dataCopy];
    default:
      return dataCopy;
  }
};

// INITIAL-STATE MUST BE OUTSIDE THE FUNCTION
