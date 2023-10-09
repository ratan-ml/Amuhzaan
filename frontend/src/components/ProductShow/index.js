import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, getProduct } from "../../store/products"
import { useParams } from "react-router-dom"
import "./ProductShow.css";

// path = /products/:productId
const ProductShow = props => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    // getProduct issue => undefined
    const product = useSelector(getProduct(productId));

    
    
    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [productId])

    if (!product) return <h1>loading...</h1>

    const price = product.price.toString()
    const priceParts = price.split('.')
    const whole = priceParts[0]
    const fraction = priceParts[1]

    return (
        <>
            <div className="product-show-container">
                <div className="show-image">
                    <img src="https://via.placeholder.com/300x300"/>
                </div>

                <div className="product-info">
                    <h1 className="show-title">{product.name}</h1>
                    {/* average rating */}
                    <div className="show-price">
                        <span className="price-symbol">$</span>
                        <span className="price-whole">{whole}</span>
                        <span className="price-fraction">{fraction}</span>
                    </div>
                    <h1>About this item</h1>
                    <ul className="feature-list">
                        <li>{product.description}</li>
                    </ul>
                </div>

                <div className="purchase-panel">
                {/* purchase info */}
                    <div className="show-price">
                        <span className="price-symbol">$</span>
                        <span className="price-whole">{whole}</span>
                        <span className="price-fraction">{fraction}</span>
                    </div>
                    <p>prime</p>
                    <br/>
                    {/* delivery date */}
                    <p>FREE delivery (date) </p>
                    <p>or fastest delivery (date) </p>
                    <br/>
                    {/* in stock/out of stock */}
                    <p className="in-stock">In Stock</p>
                    {/* quantity (edit in cart)*/}
                    {/* add to cart (can add to cart when not logged in) */}
                    <button className="add-to-cart-btn">Add to Cart</button>
                    <br/>
                    {/* buy now (links to sign in if not logged in) */}
                    {/* buy now btn is not always available */}
                    <button className="buy-now-btn">Buy Now</button>
                    {/* misc detail */}
                    <p className="a-size-small">
                        <span className="gray">Payment</span> Secure Transaction
                    </p>
                    <p className="a-size-small">
                        <span className="gray">Ships from</span> Amuhzaan
                    </p>
                    <p className="a-size-small">
                        <span className="gray">Ships from</span> Amuhzaan
                    </p>
                    <p className="a-size-small">
                        <span className="gray">Returns</span> 
                        Eligible for Return, Refund or Replacement within 30 days of receipt
                    </p>
                </div>
                <div className="description-container">
                    <h3>Product Description</h3>
                    <p>{product.description}</p>
                </div>
            </div>
            {/* divider for reviews */}
            <hr></hr>
            {/* customer reviews */}
        </>
    )
}

export default ProductShow