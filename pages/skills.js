import style from './About.module.scss' 
import SkillSection from '../components/SkillSection'

const Skills = () => {
  return(
    <div className={style.aboutme} >
      <h1 className={style.heading}> My Work<span> Tools</span></h1>
      <div className="skill">
        <SkillSection  />
      </div>
      <style jsx>
      {`
      
      @media (min-width: 788px) {
        .skill {
           padding-top: 500px;
         }
         h1 {
           padding-top: 100px
         }
      } 
      `} 
      </style>
    </div>
    )
}

export default Skills