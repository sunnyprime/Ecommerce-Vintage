import React,{useContext} from 'react'
import {ProductContext} from '../context/Products'
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList'

export default function Products() {
    // console.log(React.useContext(ProductContext));
    const {loading, products} = React.useContext(ProductContext)
    // console.log(products); 
    
    if(loading){
        return <Loading />
    }
    return (
        <div>            
            <ProductList title="our products" products={products} />>
        </div>
    )
}
