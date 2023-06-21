import { useState } from "react";
import { Logo } from "../../icons/logo";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import BurgerButton from "./BurgerButton";
import RenderLanguageButtons from "./renderLanguageButtons";
import RenderSocialButtons from "./renderSocialButtons";

const Header = () => {
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerBox}>
          <a className={styles.logo} href="#">
            <Logo />
          </a>
          <nav
            className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}
          >
            <ul className={styles.navList}>
              <RenderLanguageButtons />
              <li className={styles.navItem_desc}>
                High quality printing. Clothing and accessories branding.
              </li>
              <RenderSocialButtons />
            </ul>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
