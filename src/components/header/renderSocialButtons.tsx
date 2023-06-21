import styles from "./style.module.css";
import { Insta } from "../../icons/insta";
import { Telegram } from "../../icons/telegram";
import { Viber } from "../../icons/viber";
export default function RenderSocialButtons() {
  return (
    <div className={styles.inner__boxTwo}>
      <li className={styles.navItem}>
        <a href="#" className={styles.nav_social}>
          <Insta />
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="#" className={styles.nav_social}>
          <Telegram />
        </a>
      </li>
      <li className={styles.nav_social}>
        <a href="#">
          <Viber />
        </a>
      </li>
      <li className={styles.navItem}>
        <button className={styles.nav_price}>Calculate price</button>
      </li>
    </div>
  );
}
