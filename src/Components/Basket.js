import React from "react";
import Button from "react-bootstrap/Button";
import { removeToCart } from "../Redux/Actions/action";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Basket() {
  const basket = useSelector((state) => state.rootReducer.cartData);
  // console.log("Basket", basket);
  let amount =
    basket.length &&
    basket.map((item) => item.price).reduce((acc, cost) => acc + cost);
  // console.log(amount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>MY CART</h1>
      <h5>PRODUCT DETAILS</h5>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Brand</td>
            <td>Product</td>
            <td>Category</td>
            <td>Model</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
          {basket.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.brand}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.model}</td>
              <td>{item.price}</td>
              <td>
                {" "}
                <Button
                  onClick={() => dispatch(removeToCart(item.id))}
                  variant="primary"
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <h3
        style={{
          backgroundColor: "pink",
          color: "black",
          borderRadius: "5px"
        }}
      >
        TOTAL COST = {amount} ₹
      </h3>{" "}
      <br />
      <Link to="/">Go Back to Home Page</Link>
    </>
  );
}
export default Basket;
