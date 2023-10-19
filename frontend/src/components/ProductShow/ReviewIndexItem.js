import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteReview, updateReview } from "../../store/reviews";
import DisplayRating from "./DisplayRating";

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const reviewer = review.userId == sessionUser?.id
    const [title, setTitle] = useState(review.title)
    const [body, setBody] = useState(review.body)
    const [rating, setRating] = useState(review.rating)
    const [editMode, setEditMode] = useState(false)

    const parsedDate = new Date(review.updatedAt)
    const opts = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = parsedDate.toLocaleString('en-US', opts);

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

    const editButton = reviewer ? (
        <button className="edit-btn" onClick={e => setEditMode(true)}>Edit</button>
    ) : null

    const deleteButton = reviewer ? (
        <button className="delete-btn" onClick={handleDeleteReview}>Delete</button>
    ) : null

    const options = []
    for (let i = 1; i <= 5; i++) {
        options.push(<option value={i}>{i}</option>);
    }

    return (
        <div className="review-container">
            { editMode ? (
                <>
                    {/* future plan: move form to modal */}
                    <form className="edit-review-form" onSubmit={handleEditReview}>
                        <label>Edit headline
                            <input
                                type="text"
                                value={title}
                                placeholder="Please provide a concise and descriptive title for your review."
                                onChange={e => setTitle(e.target.value)}
                            />
                        </label>
                        <label>Edit review
                            <br/>
                            <textarea
                                value={body}
                                placeholder="Share your detailed and thoughtful experience with the product. Include relevant information, pros, cons, and any helpful insights to assist other customers in making an informed decision."
                                onChange={e => setBody(e.target.value)}
                            />
                        </label>
                        <label className="edit-label">Edit rating: 
                            <select value={rating} onChange={e => setRating(e.target.value)}>
                                {options}
                            </select>
                        </label>
                        <div className="btn-container">
                            <button className="save-btn" type="submit">Save</button>
                            {deleteButton}
                        </div>
                    </form>
                </>
                ) : (
                <>
                    <div className="profile-container">
                        <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" 
                        className="reviewer-icon" 
                        />
                        <span className="reviewer-username">{review.username}</span>
                    </div>
                    <div className="rating-row">
                        <DisplayRating rating={rating}/>
                        <span className="review-title">{title}</span>
                    </div>
                    <p className="date">Reviewed in the United States on {formattedDate}</p>
                    <p className="review-text">{body}</p>
                    {editButton}
                    {deleteButton}
                </>
                )
            }
        </div>
    )
}

export default ReviewIndexItem