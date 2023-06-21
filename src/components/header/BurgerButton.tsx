import styles from "./style.module.css";

export default function BurgerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={styles.burger}
      aria-label="open menu"
      aria-hidden="false"
      data-burger
    >
      <span className={styles.burger__line}></span>
    </button>
  );
}
