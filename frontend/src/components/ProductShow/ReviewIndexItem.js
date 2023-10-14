import { useDispatch } from "react-redux"

const ReviewIndexItem = ({review}) => {

    const dispatch = useDispatch()

    const handleDeleteReview = e => {
        
    }

    return (
        <>
            <h1>this is {review.username}</h1>
            <span>Rating: {review.rating}</span>
            <h1>Title: {review.title}</h1>
            <p>Body: {review.body}</p>
            <button onClick={handleDeleteReview}></button>
        </>
    )
}

export default ReviewIndexItem