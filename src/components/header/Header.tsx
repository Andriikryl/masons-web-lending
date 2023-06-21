import { useState } from "react";
import { Insta } from "../../icons/insta";
import { Logo } from "../../icons/logo";
import { Telegram } from "../../icons/telegram";
import { Viber } from "../../icons/viber";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import BurgerButton from "./BurgerButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      });
    } else {
      setHideOrShow(() => {
        return {
          visibility: "visible",
          transform: "none",
        };
      });
    }
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerBox}>
          <a className={styles.logo} href="#">
            <Logo />
          </a>
          <nav className={styles.nav} style={hideOrShow}>
            <ul className={styles.navList}>
              <div className={styles.inner__boxOne}>
                <li className={styles.navItem}>
                  <button className={styles.navbtn}>Ук</button>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.navbtn}>En</button>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.navbtn_number}>
                    +380666225191
                  </button>
                </li>
              </div>
              <li className={styles.navItem_desc}>
                High quality printing. Clothing and accessories branding.
              </li>

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
            </ul>
          </nav>
          <BurgerButton onClick={handleMenu} />
        </div>
      </Container>
    </header>
  );
}
