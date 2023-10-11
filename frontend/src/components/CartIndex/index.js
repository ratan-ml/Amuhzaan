import { useDispatch, useSelector } from "react-redux"
import { getCartItems, fetchCartItems } from "../../store/cart_items"
import { useEffect } from "react"
import CartIndexItem from "./CartIndexItem"

const CartIndex = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(getCartItems)

    useEffect(()=>{
        dispatch(fetchCartItems())
    },[])

    let cartTotal = 0
    cartItems.forEach(cartItem => cartTotal += cartItem.quantity * cartItem.product.price)

    // cartItems.length > 0
        // Your Amuhzaan cart is empty
        // map cartItems
            // CartIndexItem
    return (
        <>
            <div className="shopping-cart-container">
                <div className="shopping-headers">
                    <h1>Shopping Cart</h1>
                    <p>Price</p>
                </div>
                {cartItems.map(cartItem=> <CartIndexItem cartItem={cartItem}/>)}
            </div>
            <div className="purchase-detail">
                {cartTotal.toFixed(2)}
            </div>
        </>
    )
}

export default CartIndex