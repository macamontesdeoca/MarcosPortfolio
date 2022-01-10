import './index.scss';


const Project = ({info}) => {
    return (
        <div className='project_card'>
            <img className='card_imagen' src={info.image} alt='Foto del proyecto'/>
            <u className='card_title'>
            {info.title}
            </u>
            <p className='card_description'> 
                {info.description}
            </p>
            <footer className='footer_links'>
                <a
                    className='footer_links'
                    href={info.linkdeploy}
                    target="_blank"
                    rel="noreferrer"
                    download={info.download}
                    >
                    <i class="fas fa-external-link-alt fa-lg"></i>
                </a>
            </footer>

        </div>
    )
}

export default Project;
