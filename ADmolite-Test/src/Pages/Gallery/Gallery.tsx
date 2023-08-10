import style from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <div className={style.container}>
      <div className={style.gallery}>
        <div className={style.row}>
          <div className={style.itemOne}></div>
          <div className={style.itemTwo}></div>
        </div>
        <div className={style.row}>
          <div className={style.itemThree}></div>
          <div className={style.itemFour}></div>
        </div>
        <div className={style.row}>
          <div className={style.itemFive}></div>
          <div className={style.itemSix}></div>
        </div>
      </div>
    </div>
  );
};
