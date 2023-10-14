const ReviewIndexItem = ({review}) => {

    return (
        <>
            <span>Rating: {review.rating}</span>
            <h1>Title: {review.title}</h1>
            <p>Body: {review.body}</p>
        </>
    )
}

export default ReviewIndexItem