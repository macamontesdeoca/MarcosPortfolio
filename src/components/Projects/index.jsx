import React from 'react';
import './index.scss';
import Project from './project.jsx';
import projects from '../../data/projects';

const Projects = () =>{
    return(
        <div id= 'projects' className='projects_container'>
            <u className='projects_title'>
                Proyectos
            </u>
            <div className='cards_container'>
                {projects.map((item,index) =>
            <Project className = 'project_card' info={item}/>
                )}
            </div>

        </div>
    )
}

export default Projects;