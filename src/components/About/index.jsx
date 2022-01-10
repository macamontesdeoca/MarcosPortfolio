import React from 'react';
import './index.scss';
import profile from '../../assets/foto-perfil-MV.jpg';
import cv from '../../assets/Curriculum-MARCOS-VILLANUEVA.pdf';

const About = () =>{
    return(
        <div id= 'about' className='about_container'>
            <u className='about_title'>
                Un poco sobre mi
            </u>
            <div className='about_content'>
            <div className='description_container'>
                <div className='text_box'>
                    <u className='info_title'>
                        "Una persona detallista e ingeniosa."
                    </u>
                    <p className='info'>
                        Soy alguien que se puede adaptar facilmente a cualquier grupo, ya sea de trabajo o simplemente social, me gusta charlar bastante y crear vinculos con la gente, opino que es importante tener buena relacion con las personas para superar desafios tanto en el ambito laboral como en lo personal.
                    </p>
                    <u className='info_title'>
                        Marketing Digital
                    </u>
                    <p className='info'>
                        En la pandemia del año 2020 me adentré en todo el mundo digital y llamo todo mi interes el ámbito del Marketing Digital, realizando  un curso de 6 meses en Digital House me di cuenta lo mucho que me gusta, desde la parte estrategica a la creación de contenidos o campañas publicitarias.
                    </p>
                </div>
                </div>
                <div className='picture_container'>
                    <div className='picture_box'>
                    <img src={profile} alt='Foto de perfil' className='profile_picture'/>
                    <a 
                    className='picture_container_title'
                    href={cv}
                    target="_blank"
                    rel="noreferrer"
                    download='CV Marcos Villanueva'>
                        Descargar CV</a>
                    </div>
                </div>
                {/* <div className='media_links'>
                        <span className='media_links_title'> Find me on </span>
                        <a
                        className='media_links_icons'
                        href="https://github.com/macamontesdeoca"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <i class="fab fa-github fa-lg">
                        </i>
                        </a>
                        <a
                        href="https://www.linkedin.com/in/macarena-montes-de-oca/"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <i class="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a
                        className='media_links_icons'
                        href="https://api.whatsapp.com/send?phone=5492214769734&lang=en"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <i class="fab fa-whatsapp fa-lg"></i>
                        </a>
                        <span className='media_links_title'> Download my CV </span>
                        <a
                        // className='media_links_icons'
                        href={cv}
                        target="_blank"
                        rel="noreferrer"
                        download='CV Macarena Montes de Oca'
                        >
                        <i class="fas fa-file-pdf fa-lg"></i>
                        </a>

                    </div> */}
            </div>
        </div>
    )
}

export default About;