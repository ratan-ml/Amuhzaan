import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, getProducts } from "../../store/products"
import { useParams } from "react-router-dom"

// path = /categories/:categoryName
const ProductIndex = () => {
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    const products = useSelector(getProducts.filter(product => product.category === categoryName))

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    // display category name
    // memoize productindexitem
    // const ProductListItems

    return (
        <>
            <div>
            {products.map(product=><ProductIndexItem product={product}/>)}
            </div>
        </>
    )
}

export default ProductIndex