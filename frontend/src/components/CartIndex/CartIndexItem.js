import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { updateCartItem, deleteCartItem } from "../../store/cart_items"

const CartIndexItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(cartItem.quantity)
    const [inputMode, setInputMode] = useState(false)
    

    useEffect(()=> {
        setQuantity(cartItem.quantity)
        if (quantity > 10) setInputMode(true)
    },[cartItem])

    const options = []
    for (let i = 1; i <= 10; i++) {
        options.push(<option value={i}>{i}</option>);
    }

    if (quantity < 1) setQuantity(1)


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

    const handleInputState = e => {
        e.preventDefault()
        if (quantity < 11) setInputMode(false)
    }

    return (
        <>
            <div className="cart-item-container">
                <div className="item-img">
                    <Link to={`/products/${cartItem.product.id}`}>
                        <img src="https://via.placeholder.com/150x150"/>
                    </Link>
                </div>
                <div className="item-detail">
                    <div className="item-name">
                        <Link to={`/products/${cartItem.product.id}`}>
                            {cartItem.product.name}
                        </Link>
                    </div>
                    
                    <div className="item-update">
                        <span className="qty-name">Qty:</span>
                        { inputMode ? (
                            <form className="edit-qty-form" onSubmit={handleInputState}>
                                <input
                                    type="number"
                                    className="item-input"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min={1}
                                />
                                <button className="update-btn" type="submit">Update</button>
                            </form>

                        ) : (
                            <select className="select-qty" value={quantity} onChange={handleQuantityChange}>
                                {options}
                                {/* <hr></hr> */}
                                <option value="11">10+</option>
                            </select>
                        )}
                        <i class="icon-text-separator" role="img" aria-label="|"></i>
                        <button className="item-delete-btn" onClick={handleDeleteClick}>Delete</button>
                        <i class="icon-text-separator" role="img" aria-label="|"></i>
                    </div>
                </div>
                <div className="item-price">
                    <h1>${cartItem.product.price.toFixed(2)}</h1>
                </div>
            </div>
            <hr className="cart-divider"></hr>
        </>
    );
}

export default CartIndexItem