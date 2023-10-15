import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const DisplayRating = ({rating, large}) => {
    const size = large ? "27px" : "20px"

    return (
        <span className="review-rating">
            {[1, 2, 3, 4, 5].map(i => {
                if (i <= rating) {
                    return <AiFillStar size={size} color="#ffa41c" />
                } else {
                    return <AiOutlineStar size={size} color="#f59721"/>
                }
            })}
        </span>
    )
}

export default DisplayRating;