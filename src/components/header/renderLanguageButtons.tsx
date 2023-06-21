import styles from "./style.module.css";

export default function RenderLanguageButtons() {
  return (
    <div className={styles.inner__boxOne}>
      <li className={styles.navItem}>
        <button className={styles.navbtn}>Ук</button>
      </li>
      <li className={styles.navItem}>
        <button className={styles.navbtn}>En</button>
      </li>
      <li className={styles.navItem}>
        <button className={styles.navbtn_number}>+380666225191</button>
      </li>
    </div>
  );
}
