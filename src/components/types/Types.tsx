import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Types() {
  return (
    <section className={styles.Types}>
      <Container>
        <h3 className={styles.Types__title}>TYPES OF PRINTING</h3>
        <div>
          <ul className={styles.Types__list}>
            <li className={styles.Types__item}>
              <h4 className={styles.Types__itemTitle}>Thermal transfer</h4>
              <div className={styles.Types__itemImg}>
                <img src="public/type-img/type-one.jpg" alt="type__img" />
              </div>
              <div className={styles.flexB}>
                <span className={styles.Types__itemDescr}>
                  Applying with flock films
                </span>
                <button className={styles.Types__itemBtn}>Lets print!</button>
              </div>
            </li>
            <li className={styles.Types__item}>
              <h4 className={styles.Types__itemTitle}>Thermal transfer</h4>
              <div className={styles.Types__itemImg}>
                <img src="public/type-img/type-one.jpg" alt="type__img" />
              </div>
              <div className={styles.flexB}>
                <span className={styles.Types__itemDescr}>
                  Applying with flock films
                </span>
                <button className={styles.Types__itemBtn}>Lets print!</button>
              </div>
            </li>
            <li className={styles.Types__item}>
              <h4 className={styles.Types__itemTitle}>Thermal transfer</h4>
              <div className={styles.Types__itemImg}>
                <img src="public/type-img/type-one.jpg" alt="type__img" />
              </div>
              <div className={styles.flexB}>
                <span className={styles.Types__itemDescr}>
                  Applying with flock films
                </span>
                <button className={styles.Types__itemBtn}>Lets print!</button>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
