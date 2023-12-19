import React, { useState } from "react";

const Form = ({addItemToList}) => {
  const [formData, setformData] = useState({ name: "", price: 0 });

  const formHandler = (e) => {
    e.preventDefault()
    console.log(formData)
    addItemToList(formData)
    };

  const nameHandler = (e) => {
    setformData({...formData , name:e.target.value})
  };
  const priceHandler = (e) => {
    setformData({...formData , price:e.target.value})
  };
  return (
    <>
      <div>
        <form action="#" onSubmit={formHandler}>
          <input type="text" onChange={nameHandler} className="input-style"></input>
          <input type="number" onChange={priceHandler} className="input-style"></input>
          <button>add</button>
        </form>
      </div>
    </>
  );
};

export default Form;
