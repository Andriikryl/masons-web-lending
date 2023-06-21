import styles from "./style.module.css";

interface ISponsorItem {
  src: string;
  alt: string;
}

export default function SponsorItem({ src, alt }: ISponsorItem) {
  return (
    <li className={styles.item}>
      <img src={src} alt={alt} />
    </li>
  );
}
