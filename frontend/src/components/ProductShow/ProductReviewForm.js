import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addReview, getReviews } from "../../store/reviews"
import { IoIosStar } from 'react-icons/io'

const ProductReviewForm = ({product}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [rating, setRating] = useState(1)
    const sessionUser = useSelector(state => state.session.user)

    const reviews = useSelector(getReviews);
    const reviewers = reviews.map(review => review.userId);


    const handleAddReviewClick = e => {
        e.preventDefault();

        const reviewObj = {
            title: title,
            body: body,
            rating: rating,
            user_id: sessionUser.id,
            product_id: product.id
        }

        dispatch(addReview(reviewObj))
        // reset the form
        setTitle('');
        setBody('');
        setRating(1);
    }

    if (!sessionUser) {
        return <p className="review-disabled">Please sign in to review this product.</p>
    } else if (reviewers.includes(sessionUser.id)) {
        return <p className="review-disabled">Your feedback for this product has been previously submitted. Please utilize the options above to make any necessary adjustments or remove your review.</p>
    }

    const options = []
    for (let i = 1; i <= 5; i++) {
        options.push(<option value={i}>{i}</option>);
    }

    return (
        <>
            {/* <h1>Review this product</h1>  */}
            <form className="review-form" onSubmit={handleAddReviewClick}>
                <label>Add a headline
                    <input required
                        type="text"
                        value={title}
                        placeholder="What shall be the title?"
                        onChange={e => setTitle(e.target.value)}
                    />
                </label>
                <label>Add a review
                    <textarea required
                        value={body}
                        placeholder="Did you leave the front door open?"
                        onChange={e => setBody(e.target.value)}
                    />
                </label>
                <label>Overall rating: 
                    <select value={rating} onChange={e => setRating(e.target.value)}>
                        {options}
                    </select>
                </label>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </>
    )
}

export default ProductReviewForm