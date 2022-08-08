import style from "./bottomBlock.module.css";
import {
  start,
  stop,
  chooseRoom as choseRoomAction,
  choosePark as chooseParkAction,
} from "./../../../redux/slices/pictureSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  makeSelectIsGameStarted,
  makeSelectNotFoundItems,
} from "../../../redux/slices/selectors";
import { makeSelectChoosenImageType } from "../../../redux/slices/selectors";
import { IMAGE_TYPE } from "../../../redux/slices/pictureSlice";

const BottomBlock = () => {
  const isGameStarted = useSelector(makeSelectIsGameStarted);
  const notFoundItems = useSelector(makeSelectNotFoundItems);
  const choosenImageType = useSelector(makeSelectChoosenImageType);
  const dispatch = useDispatch();

  let [time, setTime] = useState(0);

  const gameFinish = () => {
    dispatch(stop());
  };
  const gameStart = () => {
    if (
      choosenImageType === IMAGE_TYPE.room ||
      choosenImageType === IMAGE_TYPE.park
    )
      dispatch(start());
  };

  useEffect(() => {
    if (isGameStarted) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      if (notFoundItems.length === 0) {
        clearInterval(timerId);
        alert(`Ваше время  ${Math.floor(time / 60)}:${time % 60}`);
        gameFinish();
      }

      return () => {
        clearInterval(timerId);
      };
    }
  }, [isGameStarted, notFoundItems]);

  const getTime = () => {
    return `${Math.floor(time / 60)}:${time % 60} `;
  };
  const chooseRoom = () => {
    dispatch(choseRoomAction());
    setTime(0);
  };
  const choosePark = () => {
    dispatch(chooseParkAction());
    setTime(0);
  };

  return (
    <div className={style.bottomBlock}>
      {!isGameStarted ? (
        <div className={style.selectImage}>
          <span
            onClick={chooseRoom}
            className={`
                ${style.prevInfo}
                ${
                  choosenImageType === IMAGE_TYPE.room
                    ? style.imageSelected
                    : ""
                }
                `}
          >
            Комната
          </span>
          <span
            onClick={choosePark}
            className={`
                ${style.prevInfo}
                ${
                  choosenImageType === IMAGE_TYPE.park
                    ? style.imageSelected
                    : ""
                }
                `}
          >
            Парк
          </span>
        </div>
      ) : null}
      <div className={style.child}>{isGameStarted ? (
        `
        ${getTime()}
        ${notFoundItems.length === 0 ? "Все предметы найдены":""}
        `
      ) : (
        <div className={style.buttonStart} onClick={gameStart}>
          СТАРТ!
        </div>
      )}</div>
    </div>
  );
};

export default BottomBlock;
