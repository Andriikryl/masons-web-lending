import { useState } from "react";
import { Logo } from "../../icons/logo";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import BurgerButton from "./BurgerButton";
import RenderLanguageButtons from "./renderLanguageButtons";
import RenderSocialButtons from "./renderSocialButtons";
import { motion } from "framer-motion";

const Header = () => {
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Container>
        <motion.div className={styles.headerBox}>
          <motion.a
            className={styles.logo}
            href="#"
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Logo />
          </motion.a>
          <nav
            className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}
          >
            <ul className={styles.navList}>
              <RenderLanguageButtons />
              <motion.li
                className={styles.navItem_desc}
                initial={{ opacity: 0, x: 3000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.7 }}
              >
                High quality printing. Clothing and accessories branding.
              </motion.li>
              <RenderSocialButtons />
            </ul>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </motion.div>
      </Container>
    </header>
  );
};

export default Header;
