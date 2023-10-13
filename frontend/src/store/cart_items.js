import csrfFetch from "./csrf";

const RECEIVE_CART_ITEMS = 'cart_items/RECEIVE_CART_ITEMS'
const RECEIVE_CART_ITEM = 'cart_items/RECEIVE_CART_ITEM'
const REMOVE_CART_ITEM = 'cart_items/REMOVE_CART_ITEM'

const receiveCartItems = (cartItems) => {
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems
    }
}
const receiveCartItem = (cartItem) => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}
const removeCartItem = (cartItemId) => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId
    }
}

export const getCartItems = state => state.cartItems ? Object.values(state.cartItems) : []

export const fetchCartItems = () => async dispatch => {
    const res = await csrfFetch(`/api/cart_items`)
    if (res.ok) {
        const cartItems = await res.json()
        dispatch(receiveCartItems(cartItems))
    }
}
export const addCartItem = (cartItem) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items`, {
        method: "POST",
        body: JSON.stringify(cartItem),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        const cartItem = await res.json()
        dispatch(receiveCartItem(cartItem))
    }
}
export const updateCartItem = (cartItem) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${cartItem.id}`,{
        method: "PATCH",
        body: JSON.stringify(cartItem),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        const updatedCartItem = await res.json()
        dispatch(receiveCartItem(updatedCartItem))
    }
}
export const deleteCartItem = (cartItemId) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: "DELETE",
    })
    if (res.ok) {
        dispatch(removeCartItem(cartItemId))
    }
}

const cartItemReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = {...state}

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return {...action.cartItems};
        case RECEIVE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem;
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId];
            return nextState;
        default:
            return state;
    }
}

export default cartItemReducer;