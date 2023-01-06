import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { emptyCart } from "../Redux/Actions/action";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { productSearch } from "../Redux/Actions/productAction";

function NavBar() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.rootReducer.cartData);
  console.log(result);
  return (
    <Navbar bg="warning" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <img
            style={{ width: "120px", borderRadius: "4px" }}
            src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="homeLinkStyle" to="/">
              Home{" "}
            </NavLink>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Product"
                className="me-2"
                aria-label="Search"
                onChange={(e) => dispatch(productSearch(e.target.value))}
              />
            </Form>
          </Nav>

          <Button
            style={{ position: "relative", right: "20px" }}
            onClick={() => dispatch(emptyCart())}
            variant="danger"
          >
            Empty Cart
          </Button>
          <NavLink to="/basket">
            <img
              className="cartStyle"
              src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
              alt="cart"
            />
            <span className="cartItemNo">{result.length}</span>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
