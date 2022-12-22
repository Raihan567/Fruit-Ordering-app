import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import "../../Styles/Shopping-cart.css";

const Carts = () => {
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          <CartItem />
        </div>

        <div className="cart__bottom">
          <h6 className="mx-3">
            Subtotal Amount: <span>$120</span>
          </h6>
          <button className="btn btn-danger mx-3">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
