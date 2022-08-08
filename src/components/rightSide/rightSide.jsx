import BottomBlock from './bottomBlock/bottomBlock';
import CenterBlock from './centerBlock/centerBlock';
import style from './rightSide.module.css'
import FindObjectText from './topBlock/findObjectText';

const RightSide = () =>{
    return(
        <div className={style.rightSide}>
              <FindObjectText/>
              <CenterBlock/>
              <BottomBlock/>
        </div>
    )
}

export default RightSide;