import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { updateCartItem, deleteCartItem } from "../../store/cart_items"

const CartIndexItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(cartItem.quantity)


    const options = []
    for (let i = 1; i <= 9; i++) {
        options.push(<option value={i}>{i}</option>);
    }

    const handleQuantityChange = e => {
        e.preventDefault();
        const newQty = e.target.value;
        setQuantity(newQty);
        const updatedCartItem = {...cartItem, quantity: newQty};
        dispatch(updateCartItem(updatedCartItem));
    }

    const handleDeleteClick = e => {
        e.preventDefault()
        dispatch(deleteCartItem(cartItem.id))
    }

    return (
        <div className="cart-item-container">
            <Link to={`/products/${cartItem.id}`}>
                <img src="https://via.placeholder.com/150x150"/>
            </Link>
            <h1>{cartItem.product.name}</h1>
            <h1>{cartItem.product.price.toFixed(2)}</h1>
            <h1>{cartItem.quantity}</h1>
            Qty: 
            <select value={quantity} onChange={handleQuantityChange}>
                {options}
            </select>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default CartIndexItem