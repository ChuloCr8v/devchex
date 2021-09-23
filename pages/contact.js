import style from './About.module.scss' 
import ContactSection from '../components/ContactSection'

const contact = () => {
  return(
    <div className={style.aboutme} >
      <h1 className={style.heading}> Lets <span>Connect </span></h1>
       <div className="contact">
        <ContactSection  />
      </div>
      <style jsx>
      {`
        .contact {
          padding-top: 200px;
         }
         
         @media (min-width: 788px){
           
         .contact {
           padding: 500px 0;
         }
         
         h1 {
           padding-top: 80px;
         }
         }
      `} 
      </style>
    </div>
    )
}

export default contact 