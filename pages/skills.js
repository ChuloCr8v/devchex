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
        .skill {
           padding-top: 200px;
         }
        
        @media (min-width:688px) {
           margin-top: 200px;
         .skill {
           padding-top: 400px;
         }
        .h1 {
          margin-top: 400px;
        }
        }
      `} 
      </style>
    </div>
    )
}

export default Skills