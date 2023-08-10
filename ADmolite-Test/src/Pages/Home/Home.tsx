import style from "./Home.module.css";

export const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.SlideOne}>
        <div className={style.row}>
          <div className={style.itemOne}>
            <h1 className={style.titleOne}>Explore</h1>
          </div>
          <div className={style.itemTwo}>
            <h1 className={style.titleTwo}>Our</h1>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.itemThree}>
            <h1 className={style.titleThree}>Planet</h1>
          </div>
          <div className={style.itemFour}>
            <h1 className={style.titleFour}>With Us!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
