import React, { useState } from 'react';
import './index.scss';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';



const Contact = () =>{

    const[state, setState] = useState();

    const handleChange = (e) => {
        return setState({...state, [e.target.name]: e.target.value})
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_do8eurl','contact_form_marcos', e.target, 'user_jnuNyqdL4g6g4yjowUStl')
        .then((result) => {
            e.target.reset();
            return swal('Thank you !','Your email was succesfully sent','success')
        }, (error) => {
            return swal('Sorry! Something went wrong','You can still contact me on: marcosvillanuevalp@gmail.com','error')
        })
    }
    return(
        <footer id= 'contact' className='contact_container'>
            <p className='text'>
                Si tienen dudas, siéntanse libres de contactarme
            </p>
            <div className='box_icons'>
            <a
            className='icon'
            href="https://www.linkedin.com/in/marcos-villanueva-/"
            target="_blank"
            rel="noreferrer"
            >
            <i class="fab fa-linkedin fa-3x"></i>
            </a>
            <a
            className='icon'
            href="mailto: marcosvillanuevalp@gmail.com"
            target="_blank"
            rel="noreferrer"
            >
            <i class="far fa-envelope fa-3x"></i>
            </a>
            </div>
            <form id='form' className='form_container' onSubmit={sendEmail}>
                <input id='name' className='id_field' type='text' name='name' placeholder='Nombre' onChange={handleChange} required/>
                <input id='email' className='id_field' type='email' name='email' placeholder='Email' onChange={handleChange} required/>
                <textarea id='message'className='id_field' type='text' name='message'placeholder='Mensaje' onChange={handleChange}></textarea>
                <input id='submit'className='id_field submit' type='submit' name='name' value='ENVIAR!'/>
            </form>
            {/* <div className='bottom_contact'>
                Made with tons of patience &#128134;&#8205;&#9792;&#65039;  by Macarena Montes de Oca @ 2021
            </div> */}
        </footer>
    )
}

export default Contact; 