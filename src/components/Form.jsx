import React, { useState } from "react";

const Form = ({ addItemToList }) => {
  const [formData, setformData] = useState({ name: "", price: 0 });

  const formHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    addItemToList(formData);
    setformData({ name: "", price: 0 });
  };

  const nameHandler = (e) => {
    setformData({ ...formData, name: e.target.value });
  };
  const priceHandler = (e) => {
    setformData({ ...formData, price: e.target.value });
  };
  return (
    <>
      <div>
        <form action="#" onSubmit={formHandler}>
          <input
            type="text"
            onBlur={nameHandler}
            value={formData.name}
            className="input-style"
          ></input>
          <input
            type="number"
            onBlur={priceHandler}
            value={formData.price}
            className="input-style"
          ></input>
          <button>add</button>
        </form>
      </div>
    </>
  );
};

export default Form;
