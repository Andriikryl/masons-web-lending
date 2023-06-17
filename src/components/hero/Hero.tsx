import { Container } from "../container/Container";
import styles from "./style.module.css";
import ImageOne from "./images/one.jpg";
import ImageTwo from "./images/two.jpg";
import ImageThree from "./images/three.jpg";
import ImageFour from "./images/four.jpg";
import ImageFive from "./images/five.jpg";
import ImageSix from "./images/sex.jpg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroBox}>
          <div className={styles.imageOne}>
            <img src={ImageOne} alt="image" />
          </div>
          <div className={styles.imageTwo}>
            <img src={ImageTwo} alt="image" />
          </div>
          <div className={styles.imageThree}>
            <img src={ImageThree} alt="image" />
          </div>
          <h2 className={styles.heroTitle}>
            Masons <span> branding </span>
            workshop
          </h2>
          <div className={styles.imageFour}>
            <img src={ImageFour} alt="image" />
          </div>
          <div className={styles.imageFive}>
            <img src={ImageFive} alt="image" />
          </div>
          <div className={styles.heroBtn}>
            <button>Lets print!</button>
          </div>
          <div className={styles.imageSix}>
            <img src={ImageSix} alt="image" />
          </div>
        </div>
      </Container>
    </section>
  );
}
