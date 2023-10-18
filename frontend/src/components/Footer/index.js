import './Footer.css'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-containter">
                <p className="credit-resource">
                    Banner by <a href="https://www.freepik.com/free-vector/flat-black-friday-twitch-cover_18494357.htm#query=amazon%20banner&position=4&from_view=keyword&track=ais">Freepik</a>
                </p>
            </div>
            <div className="built-from">
                <span>Built from:</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Rails</span>
            </div>

            <div className="trademark">
                <p>@October 2023, Amuhzaan is a Amazon Clone created by Raymond Tan</p>
            </div>
            <span className="disclosure">This project is for educational purposes and is not officially associated with Amazon. No copyright infringement intended.</span>
        </footer>
    )
}

export default Footer