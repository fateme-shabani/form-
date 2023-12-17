import React from 'react'

const Product = ({products}) => {
  return (
    <div>
        <h3>{products.name}</h3>
        <h3>{products.price}</h3>

        <h3></h3>
    </div>
  )
}

export default Product