import banner1 from '../../assets/home-banner-1.1.jpg';
import Footer from "../Footer";
import './HomePage.css';


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