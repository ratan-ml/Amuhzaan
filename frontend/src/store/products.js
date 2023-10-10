import csrfFetch from "./csrf";

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}
const receiveProduct = product => {
    return {
        type: RECEIVE_PRODUCT,
        product
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
        console.log("here")
        const product = await res.json();
        dispatch(receiveProduct(product));
    }
}

const productsReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...action.products};
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product;
            return nextState;
        default:
            return state;
    }
}

export default productsReducer;