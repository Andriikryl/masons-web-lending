import { Container } from "../container/Container";
import styles from "./style.module.css";
import ReviewItem from "./ReviewItem";

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <Container>
        <h3 className={styles.reviews__title}>Reviews</h3>
        <div>
          <ul className={styles.job_experience}>
            <ReviewItem
              name="Кирилл"
              date="21/09/2021"
              description="I ordered stickers, everything was done efficiently, professionally and on time. I recommend!"
            />
            <ReviewItem
              name="Кирилл"
              date="21/09/2021"
              description="I ordered stickers, everything was done efficiently, professionally and on time. I recommend!"
            />
            <ReviewItem
              name="Кирилл"
              date="21/09/2021"
              description="I ordered stickers, everything was done efficiently, professionally and on time. I recommend!"
            />
            <ReviewItem
              name="Кирилл"
              date="21/09/2021"
              description="I ordered stickers, everything was done efficiently, professionally and on time. I recommend!"
            />
            <ReviewItem
              name="Кирилл"
              date="21/09/2021"
              description="I ordered stickers, everything was done efficiently, professionally and on time. I recommend!"
            />
            <ReviewItem
              name="Кирилл"
              date="21/09/2021"
              description="I ordered stickers, everything was done efficiently, professionally and on time. I recommend!"
            />
            <ReviewItem
              name="Кирилл"
              date="21/09/2021"
              description="I ordered stickers, everything was done efficiently, professionally and on time. I recommend!"
            />
          </ul>
        </div>
      </Container>
    </section>
  );
}
