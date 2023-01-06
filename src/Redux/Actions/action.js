import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants";

export const addToCart = (data) => {
  console.log("Action addToCart", data);
  return {
    type: ADD_TO_CART,
    data
  };
};

export const removeToCart = (data) => {
  console.log("Action removeToCart");
  return {
    type: REMOVE_FROM_CART,
    data
  };
};

export const emptyCart = () => {
  console.log("Action emptyCart");
  return {
    type: EMPTY_CART
  };
};
