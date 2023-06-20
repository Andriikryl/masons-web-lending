import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function CanDo() {
  return (
    <section className={styles.canDo}>
      <Container>
        <h3 className={styles.canDo__title}>Also We can do</h3>
        <div className={styles.canDo__box}>
          <ul className={styles.canDo__list}>
            <li>
              <a className={styles.canDo__link} href="#">
                Pens
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                Notebooks / notepads
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                Eco bags
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                Pitty dice
              </a>
            </li>
          </ul>
          <ul className={styles.canDo__list}>
            <li>
              <a className={styles.canDo__link} href="#">
                Caps and panamas
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                Chargers
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                Backpacks and bags
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                Thermokukhli
              </a>
            </li>
          </ul>
          <ul className={styles.canDo__list}>
            <li>
              <a className={styles.canDo__link} href="#">
                thermosi
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                Plaid
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                UMBRELLA
              </a>
            </li>
            <li>
              <a className={styles.canDo__link} href="#">
                masks
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
