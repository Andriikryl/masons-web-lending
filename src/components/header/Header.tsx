import { Insta } from "../../icons/insta";
import { Logo } from "../../icons/logo";
import { Telegram } from "../../icons/telegram";
import { Viber } from "../../icons/viber";
import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.flex}>
        <div className={styles.headerBox}>
          <a className={styles.logo} href="#">
            <Logo />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <button>Ук</button>
              </li>
              <li className={styles.navItem}>
                <button>En</button>
              </li>
              <li className={styles.navItem}>
                <button>+380666225191</button>
              </li>
              <li className={styles.navItem}>
                <button></button>
              </li>
              <li>High quality printing. Clothing and accessories branding.</li>

              <li className={styles.navItem}>
                <a href="#">
                  <Insta />
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#">
                  <Telegram />
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#">
                  <Viber />
                </a>
              </li>
              <li className={styles.navItem}>
                <button>Calculate price</button>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
