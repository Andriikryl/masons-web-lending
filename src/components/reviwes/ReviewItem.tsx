import styles from "./style.module.css";

interface IReviewItem {
  name: string;
  date: string;
  description: string;
}

export default function ReviewItem({ name, date, description }: IReviewItem) {
  return (
    <li className={styles.reviews__item}>
      <div className={styles.flex}>
        <div className={styles.reviews__img}>
          <img src="public/reviews/rev.jpg" alt="image" />
        </div>
        <div className={styles.job_info}>
          <h2 className={styles.role}>{name}</h2>
          <span className={styles.reviews__time}>{date}</span>
        </div>
      </div>
      <p className={styles.reviews__desc}>{description}</p>
    </li>
  );
}
