import { Container } from "../container/Container";
import TypeList from "./TypeList";
import styles from "./style.module.css";

export default function Types() {
  return <TypeSection />;
}

function TypeSection() {
  return (
    <section className={styles.Types}>
      <Container>
        <h3 className={styles.Types__title}>TYPES OF PRINTING</h3>
        <div>
          <TypeList />
        </div>
      </Container>
    </section>
  );
}
