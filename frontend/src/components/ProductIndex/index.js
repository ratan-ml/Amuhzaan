import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProducts, getProducts } from "../../store/products"
import ProductIndexItem from "./ProductIndexItem"
import "./ProductIndex.css";

// path = /categories/:categoryName
const ProductIndex = () => {
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    const products = useSelector(getProducts)
    const categoryProducts = products.filter(product => product.category === categoryName)
    

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    return (
        <div className="product-index">
            {categoryProducts.map(product=><ProductIndexItem product={product} />)}
        </div>
    )
}

export default ProductIndex