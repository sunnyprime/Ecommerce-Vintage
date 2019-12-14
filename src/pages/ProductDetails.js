import React from 'react'
import {useParams} from 'react-router-dom';
import {ProductContext} from '../context/Products'
import {useHistory} from 'react-router-dom';
import Loading from '../components/Loading';
import {CartContext} from '../context/Cart'

export default function ProductDetails() {
    // console.log(useParams());
    const { id } = useParams()
    const history = useHistory()
    const {products} = React.useContext(ProductContext)
    const {addToCart} = React.useContext(CartContext)
    // console.log(history);
    const product = products.find(item => item.id === parseInt(id))
  
    // console.log(products);
    if (products.length === 0) {
        return <Loading />
    }    
    
    else {
        const {image:{url},title,price,description} = product
        return (
            <section className="single-product">
            <img src={url} alt={title} 
                className="single-product-image" />
                <article>
                    <h1>{title}</h1>
                    <h2>${price}</h2>
                    <p>{description}</p>
                    <button className="btn btn-primary btn-block" onClick={()=>{addToCart(product); history.push('/cart')}}>add to cart</button>
                </article>

            </section>
        )
    }
    
}
