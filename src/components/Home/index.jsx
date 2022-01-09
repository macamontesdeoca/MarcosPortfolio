import React from 'react';
import './index.scss';
import coverImage from "../../assets/background_city.jpg";
import { NavHashLink } from "react-router-hash-link";




const Home = () => {

    document.title = 'Maca Montes de Oca';
         
        return (
            <div id='home' className='cover-container'>
                <img
                    className="cover-container__image"
                    src={coverImage}
                /> 
                <h1 className = 'main'>Hi ! I'm Macarena</h1>
                <div className='subtitle'>Full Stack Web Developer</div>
                <NavHashLink className='arrow'smooth to = '#about'>
                    <i class="fas fa-angle-down fa-2x"></i>
                </NavHashLink>
                <div className='last_text'>scroll down</div>
            </div>
        ) 
    
}

export default Home;