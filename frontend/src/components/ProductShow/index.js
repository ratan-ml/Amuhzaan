import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, getProduct } from "../../store/products"
import { useParams } from "react-router-dom"

// path = /products/:productId
const ProductShow = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(getProduct(productId));

    
    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    return (
        <>
            {console.log(product)}
            <div>
                <h1>{product.name}</h1>
                <h1>{product.description}</h1>
                <h2>{product.price}</h2>
            </div>
        </>
    )
}

export default ProductShow