import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { addToCart, removeToCart } from "../Redux/Actions/action";
import { productList } from "../Redux/Actions/productAction";
import { useDispatch, useSelector } from "react-redux";

function Cards() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rootReducer.productData);
  console.log("DATA in HOME-Cards from API - SAGA ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div className="cards">
        {data.map((item, i) => (
          <Card
            style={{
              width: "20rem",
              border: "1px solid black",
              margin: "20px"
            }}
            key={i}
          >
            <Card.Img variant="top" src={item.photo} alt="ProductImg" />
            <Card.Body>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>
                ID : {item.id} - {item.name}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Category : {item.category}</ListGroup.Item>
              <ListGroup.Item>Model : {item.model}</ListGroup.Item>
              <ListGroup.Item>
                <h5>Price : {item.price} ₹</h5>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                onClick={() => dispatch(addToCart(item))}
                variant="primary"
              >
                Add
              </Button>{" "}
              <Button
                onClick={() => dispatch(removeToCart(item.id))}
                variant="primary"
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {/* <Button onClick={() => dispatch(productList())} variant="danger">
        Product
      </Button>{" "} */}
    </div>
  );
}

export default Cards;
