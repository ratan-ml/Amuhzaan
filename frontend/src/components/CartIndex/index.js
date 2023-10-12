import { useDispatch, useSelector } from "react-redux"
import { getCartItems, fetchCartItems } from "../../store/cart_items"
import { useEffect } from "react"
import CartIndexItem from "./CartIndexItem"
import { deleteCartItem } from "../../store/cart_items";
import { useHistory } from "react-router-dom"
import "./CartIndex.css";

const CartIndex = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(getCartItems)
    const history = useHistory()

    useEffect(()=>{
        // async issue?
        // cartindexitem is using the old cartitems
        dispatch(fetchCartItems())
    },[])

    let cartTotal = 0
    cartItems.forEach(cartItem => cartTotal += cartItem.quantity * cartItem.product.price)

    let cartTotalQty = 0
    cartItems.forEach(cartItem => cartTotalQty += cartItem.quantity)


    if (!cartItems || !cartItems.length) return (
        <div className="empty-cart">
            No items in the cart. Start selecting items to purchase.
        </div>
    );

    const handleCheckoutClick = e => {
        e.preventDefault();
        cartItems.forEach(cartItem => dispatch(deleteCartItem(cartItem.id)))
        history.push("/checkout")
    }

    return (
        <div className="cart-container">
            <div className="shopping-cart-container">
                <div className="shopping-cart">
                    <div className="cart-title">
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className="cart-price">
                        <p>Price</p>
                    </div>
                    <hr className="cart-divider"></hr>
                </div>
                {cartItems.map(cartItem=> <CartIndexItem cartItem={cartItem}/>)}
                <div className="cart-subtotal">
                    <span>Subtotal ({cartTotalQty} items): </span>
                    <span className="total-price">${cartTotal.toFixed(2)}</span>
                </div>
            </div>
            <div className="purchase-detail">
                <div>
                    <span>Subtotal ({cartTotalQty} items): </span>
                    <span className="total-price">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckoutClick}>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default CartIndex