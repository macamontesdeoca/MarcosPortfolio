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
        emailjs.sendForm('service_6r8fqrk','contact_form', e.target, 'user_jnuNyqdL4g6g4yjowUStl')
        .then((result) => {
            e.target.reset();
            return swal('Thank you !','Your email was succesfully sent','success')
        }, (error) => {
            return swal('Sorry! Something went wrong','You can still contact me on: macamdeoca@gmail.com','error')
        })
    }
    return(
        <footer id= 'contact' className='contact_container'>
            <p className='text'>
                Si tienen dudas, sientanse libres de contactarme
                <p className = 'text_2'>
                    mail linkedin
                {/* aca va el cuadrado con el logo del mail y el de linkedin */}
                </p>
            </p>
            <form id='form' className='form_container' onSubmit={sendEmail}>
                <input id='name' className='id_field' type='text' name='name' placeholder='Nombre' onChange={handleChange} required/>
                <input id='email' className='id_field' type='email' name='email' placeholder='Email' onChange={handleChange} required/>
                <textarea id='message'className='id_field' type='text' name='message'placeholder='Mensaje' onChange={handleChange}></textarea>
                <input id='submit'className='id_field submit' type='submit' name='name' value='ENVIAR!'/>
            </form>
            <div className='bottom_contact'>
                Made with tons of patience &#128134;&#8205;&#9792;&#65039;  by Macarena Montes de Oca @ 2021
            </div>
        </footer>
    )
}

export default Contact; 