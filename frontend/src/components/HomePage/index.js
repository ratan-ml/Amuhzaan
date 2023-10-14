import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <>
            <Link to="categories/clothing">clothing</Link>
            <Link to="categories/electronic">electronic</Link>
            <Link to="categories/book">book</Link>
        </>
    )
}

export default HomePage