import styles from "./style.module.css";
import { Insta } from "../../icons/insta";
import { Telegram } from "../../icons/telegram";
import { Viber } from "../../icons/viber";
import { motion } from "framer-motion";
export default function RenderSocialButtons() {
  return (
    <motion.div className={styles.inner__boxTwo}>
      <motion.li
        className={styles.navItem}
        initial={{ opacity: 0, x: 3000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.1 }}
      >
        <a href="#" className={styles.nav_social}>
          <Insta />
        </a>
      </motion.li>
      <motion.li
        className={styles.navItem}
        initial={{ opacity: 0, x: 3000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.3 }}
      >
        <a href="#" className={styles.nav_social}>
          <Telegram />
        </a>
      </motion.li>
      <motion.li
        className={styles.nav_social}
        initial={{ opacity: 0, x: 3000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.6 }}
      >
        <a href="#">
          <Viber />
        </a>
      </motion.li>
      <motion.li
        className={styles.navItem}
        initial={{ opacity: 0, x: 3000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.8 }}
      >
        <button className={styles.nav_price}>Calculate price</button>
      </motion.li>
    </motion.div>
  );
}
