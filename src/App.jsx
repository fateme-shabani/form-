import { useState } from "react";
import Product from "./components/Product";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [products, setproducts] = useState([
    { id: 1, name: " لپ تاپ hp", price: 54000 },
    { id: 2, name: "  تلفن همراه ", price: 14600 },
    { id: 3, name: "  تبلت سامسونگ", price: 23000 },
    { id: 4, name: " ایرپاد شیائومی", price: 8000 },
  ]);
  // const products = [
  //   { id: 1, name: " لپ تاپ hp", price: 54000 },
  //   { id: 2, name: "  تلفن همراه ", price: 14600 },
  //   { id: 3, name: "  تبلت سامسونگ", price: 23000 },
  //   { id: 4, name: " ایرپاد شیائومی", price: 8000 },
  // ];
  const addItemToList = (item) => {
    setproducts(...products, item);
  };

  return (
    <>
      <div className="product-style">
        <Form addItemToList={addItemToList} />
        {products.map((item) => {
          return <Product key={item.id} products={item} />;
        })}
      </div>
    </>
  );
}

export default App;
