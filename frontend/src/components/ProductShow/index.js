import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, getProduct } from "../../store/products"
import { useParams } from "react-router-dom"
import "./ProductShow.css";

// path = /products/:productId
const ProductShow = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(getProduct(productId));

    
    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    return (
        <>
            <div className="product-show-container">
                {/* align top */}
                <div className="show-image">
                    <img src="https://via.placeholder.com/300x300"/>
                </div>

                <div className="show-info">
                    <h1 className="show-title">{product.name}</h1>
                    {/* average rating */}
                    <p className="show-price">${product.price}</p>
                    <h1>About this item</h1>
                    <h1 className="feature-list">{product.description}</h1>
                </div>

                <div className="purchase-panel">
                {/* purchase info */}
                    <h2>${product.price}</h2>
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
                    <button class="buy-now-btn">Buy Now</button>
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
                
            </div>
            {/* divider for reviews */}
            <hr></hr>
            {/* customer reviews */}
        </>
    )
}

export default ProductShow