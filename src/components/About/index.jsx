import React from 'react';
import './index.scss';
import profile from '../../assets/foto-perfil-MV.jpg';
import cv from '../../assets/Curriculum-MARCOS-VILLANUEVA.pdf';

const About = () =>{
    return(
        <div id= 'about' className='about_container'>
            <u className='about_title'>
                Un poco sobre mí
            </u>
            <div className='about_content'>
            <div className='description_container'>
                <div className='text_box'>
                    <u className='info_title'>
                        "Una persona detallista e ingeniosa."
                    </u>
                    <p className='info'>
                        Soy alguien que se puede adaptar fácilmente a cualquier grupo, ya sea de trabajo o simplemente social, me gusta charlar bastante y crear vínculos con la gente, opino que es importante tener buena relación con las personas para superar desafíos tanto en el ámbito laboral como en lo personal.
                    </p>
                    <u className='info_title'>
                        Marketing Digital
                    </u>
                    <p className='info'>
                        En la pandemia del año 2020 me adentré en todo el mundo digital y llamó todo mi interés el ámbito del Marketing Digital, realizando un curso de 6 meses en Digital House me di cuenta lo mucho que me gusta, desde la parte estratégica a la creación de contenidos o campañas publicitarias.
                    </p>
                </div>
                </div>
                <div className='picture_container'>
                    <div className='picture_box'>
                    <img src={profile} alt='Foto de perfil' className='profile_picture'/>
                    <div className='footer_picture'>
                    <a 
                    className='picture_container_title'
                    href={cv}
                    target="_blank"
                    rel="noreferrer"
                    download='CV Marcos Villanueva'>
                        Descargar CV
                    {/* <i class="fas fa-download fa-lg"></i> */}
                    </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;