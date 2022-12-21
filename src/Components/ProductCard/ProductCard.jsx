import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/ProductCard.css";

const ProductCard = ({ item }) => {
  const { id, title, price, desc, category, image01, image02, image03 } = item;
  return (
    <motion.div  className="product__item mt-5">
      <div className="product__img">
        <Link to={`/all-fruits/${id}`}>
          <motion.img
            whileHover={{ scale: 1.1699 }}
            className="w-75"
            src={image01}
            alt="fruits image"
          />
        </Link>
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/all-fruits/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex justify-content-between mt-4 price__content">
          <span className="product__price ">${price}</span>
          <motion.button whileTap={{ scale: 1.2 }} className="addToCart__btn ">
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
