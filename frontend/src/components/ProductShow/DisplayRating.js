import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const DisplayRating = ({rating}) => {
    return (
        <span className="review-rating">
            {[1, 2, 3,4, 5].map(i => {
                if (i <= rating) {
                    return <AiFillStar size="20px" color="#ffa41c" />
                } else {
                    return <AiOutlineStar size="20px" color="#f59721"/>
                }
            })}
        </span>
    )
}

export default DisplayRating;