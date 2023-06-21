import { Insta } from "../../icons/insta";
import { Logo } from "../../icons/logo";
import { Telegram } from "../../icons/telegram";
import { Viber } from "../../icons/viber";
import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.flex}>
          <div className={styles.footer__left}>
            <a href="#">
              <Logo />
            </a>
            <div className={styles.footer__contact_info}>
              <span className={styles.footer__addres}>
                вулиця Вчительська, 30, Гнідин,Київська обл., 08340
              </span>
              <a href="#" className={styles.footer__fone}>
                +38 (066) 622 5191
              </a>
              <a href="$" className={styles.footer__post}>
                zakaz@masons.com.ua
              </a>
            </div>
          </div>
          <div className={styles.footer__right}>
            <div className={styles.footer__links}>
              <ul className={styles.footer__list}>
                <li className={styles.item}>HOMEPAGE</li>
                <li className={styles.item}>TYPES OF PRINTING</li>
                <li className={styles.item}>Reviews</li>
                <li className={styles.item}>Order a print</li>
              </ul>
              <ul className={styles.footer__list}>
                <li className={styles.item}>PRINTING ON</li>
                <li className={styles.item}>OUR WORKS</li>
                <li className={styles.item}>Also We can do</li>
                <li className={styles.item}>Write to us</li>
              </ul>
            </div>
            <div className={styles.footer__soc}>
              <a href="#">
                <Insta />
              </a>
              <a href="#">
                <Telegram />
              </a>
              <a href="#">
                <Viber />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
