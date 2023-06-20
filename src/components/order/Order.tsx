import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Order() {
  return (
    <section className={styles.order}>
      <Container>
        <div className={styles.order__box}>
          <h3 className={styles.order__title}>order print now</h3>
          <button className={styles.order__btn}>Calculate price</button>
        </div>
      </Container>
    </section>
  );
}
