import style from '../styles/ContactForm.module.scss' 
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const ContactForm = () => {
  
   useEffect(() => {
    Aos.init({duration: 500});
  })
  
  return(
    <form data-aos="fade-up" className={style.contactform}>
      <h5> Leave a message or enquiry </h5>
      <label htmlFor='name'> Name </label>
        <input type='text' required placeholder= 'Enter Name' />
      <label htmlFor='email'> Email </label>
        <input htmlFor='email' required placeholder= 'Enter Email' />
      <label htmlFor='message'> Message </label>
      <textarea id='message' placeholder ="Leave me a message" />
      <input type='submit' className={style.submit} />
    </form>
    )
}

export default ContactForm