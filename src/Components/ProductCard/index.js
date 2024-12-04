import React from "react";
import "./index.css";

const ProductCard = ({ book }) => (
  <div className="product-card">
    <img src={book.image} alt={book.title} />
    <h3>{book.title}</h3>
    <p className="price">{book.price}</p>
    <p className="old-price">{book.oldPrice}</p>
  </div>
);

export default ProductCard;
