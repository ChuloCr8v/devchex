import style from './../styles/ScrollContainer.module.scss'
import ScrollRight from "./ScrollRight"
import Scroll from "./Scroll"

const ScrollContainer = () => {
    return (
        <div>
            <div className={style.scrollcontainer}>
                <Scroll />
                <ScrollRight />
            
            </div>
        </div>
    )
}

export default ScrollContainer
