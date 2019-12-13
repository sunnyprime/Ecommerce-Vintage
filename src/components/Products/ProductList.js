import React from 'react'
import Product from "./Products"

export default function ProductList({title,products}) {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map(item => {
          return <Product key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}
