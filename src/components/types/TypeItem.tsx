import styles from "./style.module.css";

interface ITypeItem {
  title: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
}

function TypeItem({ title, imgSrc, imgAlt, description }: ITypeItem) {
  return (
    <li className={styles.Types__item}>
      <h4 className={styles.Types__itemTitle}>{title}</h4>
      <div className={styles.Types__itemImg}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.flexB}>
        <span className={styles.Types__itemDescr}>{description}</span>
        <button className={styles.Types__itemBtn}>Let's print!</button>
      </div>
    </li>
  );
}

export default TypeItem;
