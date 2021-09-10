import React from 'react';
import './Contact.css'
import photo from './photo.jpg'

const Contact = props => {

    const skillsList = props.skills.map((el, i) =>{
        return (
            <li key = {i} className="contact__skills-point">
                {el}
            </li>
        )
    });


    return(
        <section className='contact-section'>
            <div className="container">
                <div className="contact">
                    
                    <div className="contact__data">
                        <a href="tel:+37258269828" className="contact__phone">{props.phone}</a>
                        <ul className="contact__name line">
                            <li className="contact__name-point">{props.name}</li>
                            <li className="contact__name-point">{props.lastName}</li>
                        </ul>
                        <a href="mailto:mr.roman.egliens@gmail.com" className="contact__mail">{props.mail}</a>
                        <p className="contact__position">
                            {props.position}
                        </p>
                        <ul className="contact__skills">
                            {skillsList}
                        </ul>
                    </div>

                    <img src={photo} alt="" className="contact__photo"/>
                    
                </div>
            </div>
        </section>
    )
};

export default Contact;


