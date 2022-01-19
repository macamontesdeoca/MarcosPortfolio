import React from 'react';
import './index.scss';
import coverImage from "../../assets/background_city.jpg";
import { NavHashLink } from "react-router-hash-link";




const Home = () => {

    document.title = 'Marcos Villanueva';
         
        return (
            <div id='home' className='cover-container'>
                {/* <img
                    className="cover-container__image"
                    src={coverImage}
                    alt='NY city background'
                /> */}
                <div className='name-container'>
                    <h1 className = 'main'>MARCOS VILLANUEVA</h1>
                    <p className='subtitle'>Marketing Digital</p>
                </div> 
                <div className='last_text'>desliza hacia abajo</div>
                <NavHashLink className='arrow'smooth to = '#about'>
                    <i class="fas fa-angle-down fa-2x"></i>
                </NavHashLink>
            </div>
        ) 
    
}

export default Home;