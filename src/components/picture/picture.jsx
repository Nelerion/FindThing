import style from "./picture.module.css";
import ImageMapper from 'react-img-mapper';
import { found} from "./../../redux/slices/pictureSlice.js";
import { useDispatch, useSelector } from "react-redux";

import { makeSelectImage, makeSelectIsGameStarted, makeSelectJsonOptions, makeSelectGameFinish } from "../../redux/slices/selectors";

const Picture = () => {
  const img = useSelector(makeSelectImage)
  const jsonOptions = useSelector(makeSelectJsonOptions)
  const isGameStarted = useSelector(makeSelectIsGameStarted);
  const dispatch = useDispatch();

  const coords = (e)=>{
    console.log(`x:${e.clientX} y:${e.clientY}`)
  }
    
  const findItem = ({id}) => {
    dispatch(found(id));
  }

  return (
    <div className={style.picture} onClick={coords}>
      {isGameStarted ? <ImageMapper src={img} map={{
        name: 'img',
        areas: jsonOptions,
      }} onClick={findItem}  />:<div>Выберите картинку</div>}
    </div>
  );
};

export default Picture;
