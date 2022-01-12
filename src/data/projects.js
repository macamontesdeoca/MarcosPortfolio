import talentisimos from '../assets/foto-trabajo-integrador.jpg';
import portfoliomkt from '../assets/foto-portfolio.jpg'; 
import tpfinal from '../assets/TRABAJO-INTEGRADOR-FINALIZADO-COMPLETO-Total.pdf';
import pdfportfolio from '../assets/Marcos_Villanueva_PortfolioMKT.pdf'

const projects = [
    {
        title: 'Talentisimos',
        image: talentisimos,
        description: 'Proyecto de Escuela de Música para hacer crecer el sector de "Cursos de Trompeta". Se trabajó desde la parte Estratégica a la realización de contenidos en redes sociales y campañas publicitarias en Google Ads, Facebook Ads y Campañas en Doppler.',
        linkdeploy: tpfinal,
        download: 'Proyecto Final Integrador - Talentisimos'

    },
    {
        title: 'Portfolio de Marketing',
        image: portfoliomkt,
        description: 'Un porfolio recopilando Prácticas hechas a diferentes "clientes". Desde la creación de un Customer Persona, vinculación de GTM y Google Analytics, reconocimiento de tono y personalidad de una marca y buenas prácticas de optimización de una página web.',
        linkdeploy: pdfportfolio,
        download: 'Portfolio Marketing'

    }
]

export default projects;