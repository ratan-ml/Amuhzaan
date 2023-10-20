import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { updateCartItem, deleteCartItem } from "../../store/cart_items"

const CartIndexItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(cartItem.quantity)
    const [inputMode, setInputMode] = useState(false)
    const [qtyBuffer, setQtyBuffer] = useState(quantity)
    const [showUpdateBtn, setShowUpdateBtn] = useState(false)

    useEffect(()=> {
        setQuantity(cartItem.quantity)
        setInputMode(quantity > 9 ? true : false)
    },[cartItem])

    const options = []
    for (let i = 1; i <= 9; i++) {
        options.push(<option value={i}>{i}</option>);
    }

    if (quantity < 1) setQuantity(1)

    const handleQuantityChange = e => {
        e.preventDefault();
        const newQty = e.target.value;
        setQuantity(newQty);
        setQtyBuffer(newQty);
        const updatedCartItem = {...cartItem, quantity: newQty};
        dispatch(updateCartItem(updatedCartItem));
    }

    const handleDeleteClick = e => {
        e.preventDefault();
        dispatch(deleteCartItem(cartItem.id))
    }

    const handleInputSubmit = e => {
        e.preventDefault();
        setQuantity(qtyBuffer);
        setShowUpdateBtn(false);
        const updatedCartItem = {...cartItem, quantity: qtyBuffer};
        qtyBuffer < 1 ? dispatch(deleteCartItem(cartItem.id)) :
        dispatch(updateCartItem(updatedCartItem));
    }

    const handleBufferChange = e => {
        e.preventDefault();
        setQtyBuffer(e.target.value)
    }

    const showButton = e => {
        e.preventDefault();
        setShowUpdateBtn(true);
    }

    const displayUpdate = showUpdateBtn ? <button id="qty-update-btn" className="update-btn" type="submit">Update</button> : null

    return (
        <>
            <div className="cart-item-container">
                <div className="item-image">
                    <Link to={`/products/${cartItem.product.id}`}>
                    <img className="product-image" src={cartItem.photoUrl} alt="product-image"/>
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
                            <form className="edit-qty-form" onSubmit={handleInputSubmit}>
                                <input
                                    type="number"
                                    className="item-input"
                                    value={qtyBuffer}
                                    onClick={showButton}
                                    onChange={handleBufferChange}
                                    min={1}
                                />
                                {displayUpdate}
                            </form>

                        ) : (
                            <select className="select-qty" value={quantity} onChange={handleQuantityChange}>
                                {options}
                                <option value="10">10+</option>
                            </select>
                        )}
                        <i className="icon-text-separator" role="img" aria-label="|"></i>
                        <button className="item-delete-btn" onClick={handleDeleteClick}>Delete</button>
                        <i className="icon-text-separator" role="img" aria-label="|"></i>
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