import { motion } from "framer-motion";
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import productImg from "../../assets/images/product_01.jpg";
import "../../Styles/Cart-item.css";

const CartItem = () => {
  return (
    <ListGroupItem className="border-0 ">
      <div className="cart__item-info d-flex gap-2">
        <img src={productImg} alt="Product Image" />
        <div className="cart__product-info d-flex align-items-center justify-content-between w-100">
          <div>
            <h6 className="cart__product-title">Burger</h6>
            <p className="d-flex align-items-center gap-5 ">
              2x <span className="cart__product-price">$23.00</span>
            </p>

            <div className="d-flex align-items-center gap-3 increase__decrease-btn">
              <span>
                <i className="ri-add-line"></i>
              </span>
              <span>2</span>
              <span>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <motion.span whileTap={{ scale: 1.2 }} className="delete__btn">
            <i className="ri-close-line"></i>
          </motion.span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
