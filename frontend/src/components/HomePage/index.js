import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <>
            <Link to="categories/test">test</Link>
            <Link to="categories/test2">test2</Link>
            <Link to="categories/test3">test3</Link>
        </>
    )
}

export default HomePage