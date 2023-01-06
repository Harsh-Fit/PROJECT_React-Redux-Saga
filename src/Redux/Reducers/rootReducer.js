import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";
const rootReducer = combineReducers({
  cartData,
  productData
});

export default rootReducer;
