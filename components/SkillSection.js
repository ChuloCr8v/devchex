import style from '../styles/SkillSection.module.scss'
import Frontend from './Frontend'
import Heading from './Heading'
import Content from './Content'
import ScrollContainer from './ScrollContainer'

const SkillSection = () => {
  return(
    <div className={style.skillsection}>
      <div className={style.heading}>
        <Heading heading={"Skills and Stacks"} />
      </div>
      <Frontend />
      <Content />
      <div className={style.scrollcontainer}>
        <ScrollContainer />
      </div>
    </div>
    )
}

export default SkillSection