import styles from "./style.module.css";

export default function RolString() {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marquee__content}>
        <li className={styles.marquee__item}> WE PRINTING ON</li>
        <li className={styles.marquee__item}> WE PRINTING ON</li>
        <li className={styles.marquee__item}> WE PRINTING ON</li>
      </ul>
      <ul className={styles.marquee__content} aria-hidden="true">
        <li className={styles.marquee__item}> WE PRINTING ON</li>
        <li className={styles.marquee__item}> WE PRINTING ON</li>
        <li className={styles.marquee__item}> WE PRINTING ON</li>
      </ul>
    </div>
  );
}
