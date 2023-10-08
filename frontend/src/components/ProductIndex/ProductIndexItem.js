import { Link } from "react-router-dom"

// why did sam include react?
// figure out how to implement images

const ProductIndexItem = ({product}) => {

    return (
        <>
            {/* show img: links to ProductShow path */}
            {/* product name */}
            <Link to={`products/${product.id}`}>{product.name}</Link>
            {/* product overall rating */}
            {/* product pricing */}
            <div>${product.price}</div>
            {/* optional: product get as soon as date */}
        </>
    )
}

export default ProductIndexItem