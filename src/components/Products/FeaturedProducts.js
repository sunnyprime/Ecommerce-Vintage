import React from 'react'
import ProductList from './ProductList'
import {ProductContext} from '../../context/Products'
import Loading from '../Loading'

export default function FeaturedProducts() {
  const {loading,featured} = React.useContext(ProductContext)
  if(loading){
    return <Loading/>
  }
  
  return (
    <div>
      <ProductList title="freatured products" products={featured} />
    </div>
  ) 
}
