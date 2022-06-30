import styles from "../card/card.module.css";

export default function Card() {
  return (
    <div className={styles.Card}>
      <div className="featImg">
        <img className="imgHover"
          src="https://cdn.gamerjournalist.com/primary/2022/06/UyN5XtM3L2L23vD38GKX7f-1.jpg"
          alt="card title"
        />
      </div>
      <div>
        <h2 className="medTitle">Best Games to Play in 2022 (Xbox)</h2>
      </div>
    </div>
  );
}
