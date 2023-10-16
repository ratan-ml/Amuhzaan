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

    // display category name
    // const categoryString = categoryName.toString();
    // const categoryHeader = categoryString.charAt(0).toUpperCase() + categoryString.slice(1);
    
    // memoize productindexitem
    // const ProductListItems = products.map((product) => <ProductIndexItem product={product} />)


    return (
        <>
            <h1 className="category-header">{categoryName}</h1>
            <div className="category-container">
                
                <div className="product-index">
                    {category.map(product=><ProductIndexItem product={product} />)}
                </div>
            </div>
        </>
    )
}

export default ProductIndex