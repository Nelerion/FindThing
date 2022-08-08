import style from './centerBlock.module.css';
import { useSelector } from 'react-redux';

import { makeSelectJsonOptions, makeSelectIsGameStarted, makeSelectNotFoundItems } from '../../../redux/slices/selectors';

const CenterBlock = ()=>{
    const jsonOptions = useSelector(makeSelectJsonOptions);
    const notFoundItems = useSelector(makeSelectNotFoundItems);
    const isGameStarted = useSelector(makeSelectIsGameStarted);

    return(
        isGameStarted&&<div className={style.listObject}>
            {isGameStarted && jsonOptions.map(
                ({title, id: idFound }) => (
                    <div className={notFoundItems.find(({id}) => id === idFound) ? style.item : style.itemFound}>
                        {title}
                    </div>
                ))}
        </div>
    )
}

export default CenterBlock;