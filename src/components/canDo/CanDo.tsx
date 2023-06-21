import { Container } from "../container/Container";
import styles from "./style.module.css";
import CanDoList from "./CanDoList";

export default function CanDoSection() {
  const list1Items = ["Pens", "Notebooks / notepads", "Eco bags", "Pitty dice"];
  const list2Items = [
    "Caps and panamas",
    "Chargers",
    "Backpacks and bags",
    "Thermokukhli",
  ];
  const list3Items = ["thermosi", "Plaid", "UMBRELLA", "masks"];

  return (
    <section className={styles.canDo}>
      <Container>
        <h3 className={styles.canDo__title}>Also We can do</h3>
        <div className={styles.canDo__box}>
          <CanDoList items={list1Items} />
          <CanDoList items={list2Items} />
          <CanDoList items={list3Items} />
        </div>
      </Container>
    </section>
  );
}
