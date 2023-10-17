import { Link } from "react-router-dom";
import banner1 from '../../assets/home-banner-1.1.jpg';
import './HomePage.css';

const HomePage = () => {

    return (
        <>
            <div className="banner-container">
                <img src={banner1} alt=""/>
            </div>
        </>
    )
}

export default HomePage