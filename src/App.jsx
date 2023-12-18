import { useState } from "react";
import Product from "./components/Product";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const products = [
    { id: 1, name: " لپ تاپ hp", price: 54000 },
    { id: 2, name: "  تلفن همراه ", price: 14600 },
    { id: 3, name: "  تبلت سامسونگ", price: 23000 },
    { id: 4, name: " ایرپاد شیائومی", price: 8000 },
  ];

  return (
    <>
      <div className="product-style">
      <Form />
        {products.map((item) => {
          return <Product key={item.id} products={item} />;
        })}
      </div>
    </>
  );
}

export default App;
