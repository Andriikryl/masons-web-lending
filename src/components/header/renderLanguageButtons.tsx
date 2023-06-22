import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function RenderLanguageButtons() {
  return (
    <motion.div
      className={styles.inner__boxOne}
      initial={{ opacity: 0, x: 3000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.9 }}
    >
      <li className={styles.navItem}>
        <button className={styles.navbtn}>Ук</button>
      </li>
      <li className={styles.navItem}>
        <button className={styles.navbtn}>En</button>
      </li>
      <li className={styles.navItem}>
        <button className={styles.navbtn_number}>+380666225191</button>
      </li>
    </motion.div>
  );
}
