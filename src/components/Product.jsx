import React, { useState } from "react";

const Product = ({ products }) => {
  const [priceCounter, setpriceCounter] = useState(0);
  const decHandler = () => {
    if (priceCounter > 0) {
      setpriceCounter(priceCounter - 1);
    }
  };
  const incHandler = () => {
    setpriceCounter(priceCounter + 1);
  };

  const totalPrice = priceCounter * products.price;
  return (
    <>
      <div className="product-box">
        <h3>{products.name}</h3>
        <h3>{products.price} تومان</h3>
        <div className="box-counter">
          <button onClick={incHandler}>+</button>
          <label>{priceCounter}</label>
          <button onClick={decHandler}>-</button>
        </div>
        <h3>{totalPrice}</h3>
      </div>
    </>
  );
};

export default Product;
