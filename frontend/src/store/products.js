import csrfFetch from "./csrf";

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}
const receiveProduct = payload => {
    return {
        type: RECEIVE_PRODUCT,
        payload
    }
}

export const getProducts = state => state.products ? Object.values(state.products) : []
export const getProduct = productId => state => state.products ? state.products[productId] : null

export const fetchProducts = () => async dispatch => {
    const res = await csrfFetch(`/api/products`);
    if (res.ok) {
        const products = await res.json();
        dispatch(receiveProducts(products));
    }
}

export const fetchProduct = productId => async dispatch => {
    const res = await csrfFetch(`/api/products/${productId}`);
    if (res.ok) {
        const payload = await res.json();
        dispatch(receiveProduct(payload));
    }
}

const productsReducer = (state={}, action) => {
    let nextState = {...state};
    
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...action.products};
        case RECEIVE_PRODUCT:
            return {...nextState, [action.payload.product.id]: action.payload.product}
        default:
            return state;
    }
}

export default productsReducer;