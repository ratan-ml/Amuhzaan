import { Link } from "react-router-dom"
import DisplayRating from "../ProductShow/DisplayRating";

const ProductIndexItem = ({product}) => {
    const price = product.price.toFixed(2).toString();
    const [whole, fraction] = price.split('.');

    const displayName = product.name.length > 140 ? product.name.slice(0, 140) + "..." : product.name

    return (
        <div className="product-container">
            <Link to={`/products/${product.id}`}>
            <div className="product-listing-image">
                    <img className="product-image" src={product.photoUrl} alt="product-image"/>
            </div>
            </Link>
            <div className="product-listing-details">
                <h3 className="product-name">
                    <Link to={`/products/${product.id}`}>{displayName}</Link>
                </h3>
                <DisplayRating rating={product.rating}/>
                <div className="product-price">
                    <span className="price-symbol">$</span>
                    <span className="price-whole">{whole}</span>
                    <span className="price-fraction">{fraction}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductIndexItem