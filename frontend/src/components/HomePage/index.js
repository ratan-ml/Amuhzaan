import { Link } from "react-router-dom";
import banner1 from '../../assets/home-banner-1.1.jpg';
import './HomePage.css';
import Footer from "../Footer";

const HomePage = () => {

    return (
        <>
            <div className="banner-container">
                <img src={banner1} alt=""/>
            </div>
            <Footer/>
        </>
    )
}

export default HomePage