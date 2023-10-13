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
const removeReviews = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const getReviews = state => state.reviews ? Object.values(state.reviews) : []

export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch(`/api/products/:productId/reviews`)
    if (res.ok) {
        const reviews = res.json()
        dispatch(receiveReviews(reviews))
    }
}
export const createReview = review => async dispatch => {

}
