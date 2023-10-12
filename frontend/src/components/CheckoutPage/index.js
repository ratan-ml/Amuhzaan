import { NavLink } from 'react-router-dom';
import "./CheckoutIndex.css"

const CheckoutPage = () => {

    return (
        <div className="checkout-container">
            <div className="thank-you-container">       
                <h1 className="thank-you-header">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                    <span className="thank-you-msg">Thank you, your order has been placed.</span>
                </h1>
            </div>
            <p className="order-placed-msg">Please check your email for order confirmation and detailed delivery information.</p>
            <p className="order-placed-msg">Esimated delivery: <span className="delivery-date">Neverember, 99, 9999</span>
            </p>
            <NavLink className="continue-shopping" to="/">Continue shopping</NavLink>
        </div>
    )
}

export default CheckoutPage