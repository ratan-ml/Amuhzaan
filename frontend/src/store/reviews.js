import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}
const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}
const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

// export const getReviews = state => state.reviews ? Object.values(state.reviews) : []
export const getReviews = state => state.product ? Object.values(state.product.reviews) : []

export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch(`/api/reviews`)
    if (res.ok) {
        const reviews = res.json()
        dispatch(receiveReviews(reviews))
    }
}
export const addReview = (review) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/`, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        const review = await res.json()
        dispatch(receiveReview(review))
    }
}
export const updateReview = review => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        const updatedReview = await res.json()
        dispatch(receiveReview(updatedReview))
    }
}
export const deleteReview = reviewId => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    })
    if (res.ok) {
        dispatch(removeReview(reviewId))
    }
}

const reviewReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = {...state}

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return {...action.reviews};
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }
}

export default reviewReducer