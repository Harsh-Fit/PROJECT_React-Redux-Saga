import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../constants";

export const productList = () => {
  // ACTION ALONE - CAN NOT HANDLE ASYNC ACTION - WE NEED SAGA

  // let data = await fetch("http://localhost:3500/product");
  // data = await data.json();
  // console.log(data);
  // console.warn("Action product list", data);

  return {
    type: PRODUCT_LIST
  };
};

//// NO NEED TO CREATE SET PRODUCT LIST - DATA DIRECTLY TRAVEL TO PRODUCT REDUCER

// export const setProductList = (data) => {
//   console.warn("Set Action", data);
//   return {
//     type: SET_PRODUCT_LIST,
//     data
//   };
// };

export const productSearch = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query
  };
};
