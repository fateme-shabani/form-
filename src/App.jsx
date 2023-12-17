import { useState } from 'react'
import Product from './components/Product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const products=[
    {id:1,name:'laptop',price:54000},
    {id:2,name:'mobile',price:14600},
    {id:3,name:'tablet',price:23000},
    {id:4,name:'air pods',price:8000}
  ]

  return (
    <div>
      {products.map((item)=>{
        return <Product products={item}/>
      })}

    </div>
  )
}

export default App
