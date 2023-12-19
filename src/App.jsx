import { useId, useState } from "react";
import Product from "./components/Product";
import Form from "./components/Form";
import "./App.css";
import {v4 as uuidv4} from 'uuid'


function App() {
  // const id=useId()
  // console.log(id)
  const [products, setproducts] = useState([
    { id: 1, name: " لپ تاپ hp", price: 54000 },
    { id: 2, name: "  تلفن همراه ", price: 14600 },
    { id: 3, name: "  تبلت سامسونگ", price: 23000 },
    { id: 4, name: " ایرپاد شیائومی", price: 8000 },
  ]);

  const addItemToList = (item) => {
    setproducts([...products, item]);
    item.id=uuidv4()
    // item.id=new Date()
    // console.log(item)
    
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
