import style from '../styles/ContactForm.module.scss' 
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const ContactForm = () => {
  
   useEffect(() => {
    Aos.init({duration: 500});
  })
  
  return(
    <form name="contact" data-aos="fade-up" data-netlify="true" className={style.contactform}>
    <input type="hidden" name="form-name" value="contact"/>
      <h5> Leave a message or enquiry </h5>
      <label htmlFor='name'> Name </label>
        <input type='text' name="name" required placeholder= 'Enter Name' />
      <label htmlFor='email'> Email </label>
        <input htmlFor='email' name="email" required placeholder= 'Enter Email' />
      <label htmlFor='message'> Message </label>
      <textarea id='message' name="message" placeholder ="Leave me a message" />
      <input type='submit' className={style.submit} />
    </form>
    )
}

export default ContactForm