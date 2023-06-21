import styles from "./style.module.css";
interface ICanDoList {
  items: string[];
}

export default function CanDoList({ items }: ICanDoList) {
  return (
    <ul className={styles.canDo__list}>
      {items.map((item) => (
        <li key={item}>
          <a className={styles.canDo__link} href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
