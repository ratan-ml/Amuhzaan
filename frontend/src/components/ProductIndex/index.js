import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, getProducts } from "../../store/products"
import { useParams } from "react-router-dom"
import ProductIndexItem from "./ProductIndexItem"
import "./ProductIndex.css";

// path = /categories/:categoryName
const ProductIndex = () => {
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    const products = useSelector(getProducts)
    const category = products.filter(product => product.category === categoryName)
    

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    return (
        <>
            <div className="category-container">
                <div className="product-index">
                    {category.map(product=><ProductIndexItem product={product} />)}
                </div>
            </div>
        </>
    )
}

export default ProductIndex