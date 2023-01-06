// SAGA
// function* is a generator function which handles API the async operation and returns the data once fetched
import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../constants";

function* getProducts() {
  // console.warn("API Called");
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  // console.warn("API product list", data);
  // console.log(data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  console.log("SEARCH DATA", data);
  let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
