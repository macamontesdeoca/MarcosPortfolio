import React from 'react';
import './index.scss';


const Skills = () =>{
    return(
        <div id= 'skills' className='skills_container'>
            <u className='skills_title'>
                Habilidades
            </u>
            <div className='skills_info'>
                <div id='arriba' className='skills_horizontal'>
                    <div className='columnas_nuevas'>
                        <div className='arrow-pointer'>
                            Estrategia
                        </div>
                            <ul className='unordered_list'>
                                <li className = 'list_item'>Objetivos SMART y Funnel de Conversión</li>
                                <li className = 'list_item'>Audiencias y Canales</li>
                                <li className = 'list_item'>Customer Journey Map</li>
                                <li className = 'list_item'>Metricas y KPIs</li>
                                <li className = 'list_item'>Plan de Medios</li>
                            </ul>
                    </div>
                    <div className='columnas_nuevas'>
                        <div className='arrow-pointer'>
                            Tecnologia
                        </div>
                            <ul className='unordered_list'>
                                <li className = 'list_item'>Analítica y GTM</li>
                                <li className = 'list_item'>Google Analytics</li>
                                <li className = 'list_item'>UTMs</li>
                                <li className = 'list_item'>Eventos en GTM</li>
                            </ul>
                    </div>
                    <div className='columnas_nuevas'>
                        <div className='arrow-pointer'>
                            Contenidos
                        </div>
                            <ul className='unordered_list'>
                                <li className = 'list_item'>Personalidad y Tono de Marca</li>
                                <li className = 'list_item'>Insights</li>
                                <li className = 'list_item'>Territorios</li>
                                <li className = 'list_item'>Storytelling</li>
                                <li className = 'list_item'>Redes Sociales para Audiencias y Marcas específicas</li>
                                <li className = 'list_item'>Analítica y Reporting en Social Media</li>
                            </ul>
                    </div>
                </div>
                <div id='abajo' className='skills_horizontal'>
                <div className='columnas_nuevas'>
                        <div className='arrow-pointer'>
                            SEO
                        </div>
                            <ul className='unordered_list'>
                                <li className = 'list_item'>Factores ON Page y OFF Page</li>
                                <li className = 'list_item'>Search Console</li>
                                <li className = 'list_item'>SEO Minion, MOZ, Link Building</li>
                            </ul>
                    </div>
                    <div className='columnas_nuevas'>
                        <div className='arrow-pointer'>
                            Contacto Directo
                        </div>
                            <ul className='unordered_list'>
                                <li className = 'list_item'>Campañas de envíos de Email Masivos en Doppler</li>
                                <li className = 'list_item'>UTMs en Campañas de Email</li>
                                <li className = 'list_item'>Whatsapp Business</li>
                            </ul>
                    </div>
                    <div className='columnas_nuevas'>
                        <div className='arrow-pointer'>
                            Campañas
                        </div>
                            <ul className='unordered_list'>
                                <li className = 'list_item'>Campañas Publicitarias Google Ads y Facebook Ads</li>
                                <li className = 'list_item'>Google Ads Search y Display</li>
                                <li className = 'list_item'>Social ADS Facebook e Instagram</li>
                            </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills;