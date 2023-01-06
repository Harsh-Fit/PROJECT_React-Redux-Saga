import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constants";

const initialState = [];
export const productData = (data = initialState, action) => {
  switch (action.type) {
    // NO NEED OF PRODUCT LIST CASE
    // case PRODUCT_LIST:
    //   console.warn("PRODUCT_LIST Condition ", action);
    //   return [{ product: action.data }, ...data];

    case SET_PRODUCT_LIST:
      // console.warn("SET_DATA_LIST Condition ", action);
      return [...action.data];

    default:
      return data;
  }
};
