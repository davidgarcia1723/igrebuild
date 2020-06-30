import React from 'react';
import './ContactForm.css'
import InstaLandingFooter from '../InstaLandingFooter/InstaLandingFooter';


const ContactForm = () => {
 
        return (
         
            <div id="contact-wrapper">
                <div className="contact-container">
        <div className="contact-form-data">
            <form name="contact" method="POST" data-netlify="true">
                <div className="logo">
                    <img src="img/Instagram.png" alt="instagram" />
                            </div>
                            <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="name" placeholder="Enter first and last name" required/>
                <input type="text" name="email" placeholder="Username or email" required />
                            <textarea className="textarea" type="text" name="message" placeholder="Leave us a message :)" required />
                            <button className="contact-form-btn" type="submit">Submit</button>
                            <InstaLandingFooter />
            
           
                        </form>
                       
    </div>
            </div>
           
            </div>
                
          
        )
    }

export default ContactForm