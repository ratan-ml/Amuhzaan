import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getReviews } from "../../store/reviews";
import DisplayRating from "../ProductShow/DisplayRating";

// figure out how to implement images

const ProductIndexItem = ({product}) => {

    const reviews = useSelector(getReviews)
    console.log(reviews)
    const price = product.price.toFixed(2).toString();
    const [whole, fraction] = price.split('.');

    return (
        <div className="product-container">
            <div className="product-listing-image">
                {/* show img: links to ProductShow path */}
                <Link to={`/products/${product.id}`}>
                    <img className="product-image" src="https://via.placeholder.com/300x300"/>
                </Link>
            </div>

            <div className="product-listing-details">
                {/* product name (path to product id or name?) */}
                {/* amzn link show product name then multiple hashed values afterwards */}
                <h3 className="product-name">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                {/* product overall rating */}
                <DisplayRating rating={product.rating}/>
                {/* product pricing */}
                <div className="product-price">
                    <span className="price-symbol">$</span>
                    <span className="price-whole">{whole}</span>
                    <span className="price-fraction">{fraction}</span>
                </div>
                {/* optional: product get as soon as date */}
            </div>
        </div>
    )
}

export default ProductIndexItem