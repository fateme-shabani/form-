import React, { useState } from "react";

const Form = (props) => {
  const [formData, setformData] = useState({ name: "", price: 0 });

  const formHandler = (e) => {
    e.preventDefault()
    console.log(formData)
    props.addItemToList(formData)
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
          <input type="text" onChange={nameHandler} className="test"></input>
          <input type="number" onChange={priceHandler} className="test"></input>
          <button>add</button>
        </form>
      </div>
    </>
  );
};

export default Form;
