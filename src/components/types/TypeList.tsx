import TypeItem from "./TypeItem";
import styles from "./style.module.css";

function TypeList() {
  return (
    <ul className={styles.Types__list}>
      <TypeItem
        title="Thermal transfer"
        imgSrc="public/type-img/type-one.jpg"
        imgAlt="type__img"
        description="Applying with flock films"
      />
      <TypeItem
        title="Thermal transfer"
        imgSrc="public/type-img/type-one.jpg"
        imgAlt="type__img"
        description="Applying with flock films"
      />
      <TypeItem
        title="Thermal transfer"
        imgSrc="public/type-img/type-one.jpg"
        imgAlt="type__img"
        description="Applying with flock films"
      />
    </ul>
  );
}

export default TypeList;
