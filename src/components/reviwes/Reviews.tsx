import { Container } from "../container/Container";
import styles from "./style.module.css";
export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <Container>
        <h3 className={styles.reviews__title}>Reviews</h3>
        <div>
          <ul className={styles.job_experience}>
            <li className={styles.reviews__item}>
              <div className={styles.flex}>
                <div className={styles.reviews__img}>
                  <img src="public/reviews/rev.jpg" alt="image" />
                </div>
                <div className={styles.job_info}>
                  <h2 className={styles.role}>Кирилл</h2>
                  <span className={styles.reviews__time}>21/09/2021</span>
                </div>
              </div>
              <p className={styles.reviews__desc}>
                I ordered stickers, everything was done efficiently,
                professionally and on time. I recommend!
              </p>
            </li>
            <li className={styles.reviews__item}>
              <div className={styles.flex}>
                <div className={styles.reviews__img}>
                  <img src="public/reviews/rev.jpg" alt="image" />
                </div>
                <div className={styles.job_info}>
                  <h2 className={styles.role}>Кирилл</h2>
                  <span className={styles.reviews__time}>21/09/2021</span>
                </div>
              </div>
              <p className={styles.reviews__desc}>
                I ordered stickers, everything was done efficiently,
                professionally and on time. I recommend!
              </p>
            </li>
            <li className={styles.reviews__item}>
              <div className={styles.flex}>
                <div className={styles.reviews__img}>
                  <img src="public/reviews/rev.jpg" alt="image" />
                </div>
                <div className={styles.job_info}>
                  <h2 className={styles.role}>Кирилл</h2>
                  <span className={styles.reviews__time}>21/09/2021</span>
                </div>
              </div>
              <p className={styles.reviews__desc}>
                I ordered stickers, everything was done efficiently,
                professionally and on time. I recommend!
              </p>
            </li>
            <li className={styles.reviews__item}>
              <div className={styles.flex}>
                <div className={styles.reviews__img}>
                  <img src="public/reviews/rev.jpg" alt="image" />
                </div>
                <div className={styles.job_info}>
                  <h2 className={styles.role}>Кирилл</h2>
                  <span className={styles.reviews__time}>21/09/2021</span>
                </div>
              </div>
              <p className={styles.reviews__desc}>
                I ordered stickers, everything was done efficiently,
                professionally and on time. I recommend!
              </p>
            </li>
            <li className={styles.reviews__item}>
              <div className={styles.flex}>
                <div className={styles.reviews__img}>
                  <img src="public/reviews/rev.jpg" alt="image" />
                </div>
                <div className={styles.job_info}>
                  <h2 className={styles.role}>Кирилл</h2>
                  <span className={styles.reviews__time}>21/09/2021</span>
                </div>
              </div>
              <p className={styles.reviews__desc}>
                I ordered stickers, everything was done efficiently,
                professionally and on time. I recommend!
              </p>
            </li>
            <li className={styles.reviews__item}>
              <div className={styles.flex}>
                <div className={styles.reviews__img}>
                  <img src="public/reviews/rev.jpg" alt="image" />
                </div>
                <div className={styles.job_info}>
                  <h2 className={styles.role}>Кирилл</h2>
                  <span className={styles.reviews__time}>21/09/2021</span>
                </div>
              </div>
              <p className={styles.reviews__desc}>
                I ordered stickers, everything was done efficiently,
                professionally and on time. I recommend!
              </p>
            </li>
            <li className={styles.reviews__item}>
              <div className={styles.flex}>
                <div className={styles.reviews__img}>
                  <img src="public/reviews/rev.jpg" alt="image" />
                </div>
                <div className={styles.job_info}>
                  <h2 className={styles.role}>Кирилл</h2>
                  <span className={styles.reviews__time}>21/09/2021</span>
                </div>
              </div>
              <p className={styles.reviews__desc}>
                I ordered stickers, everything was done efficiently,
                professionally and on time. I recommend!
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
