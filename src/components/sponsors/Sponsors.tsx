// Sponsors.js
import { Container } from "../container/Container";
import styles from "./style.module.css";
import SponsorItem from "./SponsorItem";

export default function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <Container>
        <h3 className={styles.sponsors__title}>Partners</h3>
        <div className={styles.gallery}>
          <ul className={styles.wrapper}>
            <SponsorItem src="public/sponsors/spon-one.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-three.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-five.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-one.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-three.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-five.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-three.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-five.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-one.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-three.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-five.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-one.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-three.svg" alt="img" />
            <SponsorItem src="public/sponsors/spon-five.svg" alt="img" />
          </ul>
        </div>
      </Container>
    </section>
  );
}
