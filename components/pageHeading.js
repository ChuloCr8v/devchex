import style from '../styles/pageHeading.module.scss'

const pageHeading = ({heading}) => {
  return(
    <>
      <h1 className={style.heading}>{heading}</h1>
    </>
    )
}

export default pageHeading