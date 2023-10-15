import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteReview, updateReview } from "../../store/reviews";

const ReviewIndexItem = ({review, reviewed}) => {

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    // const reviewer = review.userId == sessionUser.id
    const [title, setTitle] = useState(review.title)
    const [body, setBody] = useState(review.body)
    const [rating, setRating] = useState(review.rating)
    const [editMode, setEditMode] = useState(false)

    const handleDeleteReview = e => {
        e.preventDefault();
        dispatch(deleteReview(review.id))
    }

    const handleEditReview = e => {
        e.preventDefault();

        const reviewObj = {
            ...review,
            title: title,
            body: body,
            rating: rating,
        }
        setEditMode(false)
        dispatch(updateReview(reviewObj))
    }

    const editButton = reviewed ? (
        <button onClick={e => setEditMode(true)}>Edit</button>
    ) : null

    const deleteButton = reviewed ? (
        <button onClick={handleDeleteReview}>Delete</button>
    ) : null

    const options = []
    for (let i = 1; i <= 5; i++) {
        options.push(<option value={i}>{i}</option>);
    }

    return (
        <div className="review-container">
            { editMode ? (
                <>
                    <h1>Review this product</h1> 
                    <form className="edit-review-form" onSubmit={handleEditReview}>
                        <label>Edit headline
                            <input
                                type="text"
                                value={title}
                                placeholder="What shall be the title?"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </label>
                        <label>Edit review
                            <textarea
                                value={body}
                                placeholder="Did you leave the front door open?"
                                onChange={e => setBody(e.target.value)}
                            />
                        </label>
                        <label>Edit rating: 
                            <select value={rating} onChange={e => setRating(e.target.value)}>
                                {options}
                            </select>
                        </label>
                        <button type="submit">Save</button>
                    </form>
                </>
                ) : (
                <>
                    <h1>this is {review.username}</h1>
                    <span>Rating: {rating}</span>
                    <h1>Title: {title}</h1>
                    <p>Body: {body}</p>
                    {editButton}
                </>
                )
            }
            {/* display delete button if reviewer*/}
            {deleteButton}
        </div>
    )
}

export default ReviewIndexItem