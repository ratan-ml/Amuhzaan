import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts, fetchProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndex/ProductIndexItem';
import "./SearchResults.css";


const SearchResults = () => {
    const { term } = useParams();
    const dispatch = useDispatch();
    const lowerCaseTerm = term.toLowerCase();
    const products = useSelector(getProducts)
    const filteredProducts = products.filter(product => product.category.toLowerCase().includes(lowerCaseTerm) || 
    product.name.toLowerCase().includes(lowerCaseTerm))

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

return filteredProducts.length > 0 ? (
        <div className="product-index">
            {filteredProducts.map(product => <ProductIndexItem product={product}/>)}
        </div>
    ) : (
        <div className="no-results">
            <div className="no-result-text">
                <p>Sorry, we couldn't find any products matching your search for "{term}".</p>
                <p>Please try a different search term or explore our categories for more options.</p>
            </div>
        </div>
    )
}

export default SearchResults