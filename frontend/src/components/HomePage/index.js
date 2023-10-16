import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <>
            <Link to="categories/clothing">clothing</Link>
            <Link to="categories/electronics">electronic</Link>
            <Link to="categories/books">book</Link>
        </>
    )
}

export default HomePage