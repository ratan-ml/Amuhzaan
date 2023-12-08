import csrfFetch from "./csrf";

const RECEIVE_ORDERS = 'orders/RECEIVE_ORDERS'
const RECEIVE_ORDER = 'orders/RECEIVE_ORDER'
// For testing purposes
const REMOVE_ORDER = 'orders/REMOVE_ORDER'

const receiveOrders = (orders) => {
    return {
        type: RECEIVE_ORDERS,
        orders
    }
}
const receiveOrder = (order) => {
    return {
        type: RECEIVE_ORDER,
        order
    }
}
const removeOrder = (orderId) => {
    return {
        type: REMOVE_ORDER,
        orderId
    }
}

export const fetchOrders = () => async dispatch => {
    const res = await csrfFetch(`/api/orders`)
    if (res.ok) {
        const orders = await res.json()
        dispatch(receiveOrders(orders))
    }
}
export const addOrder = (order) => async dispatch => {
    const res = await csrfFetch(`/api/orders`, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        const order = await res.json()
        dispatch(receiveOrder(order))
    }
}
export const deleteOrder = (orderId) => async dispatch => {
    const res = await csrfFetch(`/api/orders/${orderId}`, {
        method: "DELETE",
    })
    if (res.ok) {
        dispatch(removeOrder(orderId))
    }
}

const orderReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = {...state}

    switch (action.type) {
        case RECEIVE_ORDERS:
            return {...nextState, ...action.orders};
        case RECEIVE_ORDER:
            return {...nextState, [action.order.id]: action.order}
        case REMOVE_ORDER:
            delete nextState[action.orderId];
            return nextState;
        default:
            return state;
    }
}

export default orderReducer;