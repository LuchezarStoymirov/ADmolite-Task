import style from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <div className={style.container}>
      <div className={style.gallery}>
        <div className={style.row}>
          <div className={style.itemOne}><div className={style.hoverText}>Mountaineering is more than a sport; it's a quest for self-discovery. Standing on a summit, one feels a connection to nature's grandeur, where challenges turn into triumphs.</div></div>
          <div className={style.itemTwo}><div className={style.hoverText}>The allure of high peaks calls to the adventurous soul. In the world of mountaineering, every ascent teaches resilience, strength, and the beauty of a world above the clouds.</div></div>
        </div>
        <div className={style.row}>
          <div className={style.itemThree}><div className={style.hoverText}>With a blend of technical skill and mental fortitude, mountaineers navigate through rock, snow, and ice. Every climb is a unique puzzle, and every summit, a reward for perseverance.</div></div>
          <div className={style.itemFour}><div className={style.hoverText}>Mountaineering fosters a profound connection to the natural world. With each step upward, climbers become part of the mountain's timeless landscape, embracing solitude and simplicity.</div></div>
        </div>
        <div className={style.row}>
          <div className={style.itemFive}><div className={style.hoverText}>The thrill of mountaineering comes from conquering uncharted terrains and facing the unknown. It's an adventure that demands courage, preparation, and an undying passion for exploration.</div></div>
          <div className={style.itemSix}><div className={style.hoverText}>To a mountaineer, the journey is as significant as the destination. The challenges, friendships, and views along the way culminate in an experience that transcends mere sport. It's a way of life, etched into the very rock and ice they traverse.</div></div>
        </div>
      </div>
    </div>
  );
};
