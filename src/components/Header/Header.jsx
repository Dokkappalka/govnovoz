import React from "react";
import styles from "./Header.module.scss";
import MainLogo from "../../assets/logo.png";
import PhoneIcon from "../../assets/phone.svg";
import MailIcon from "../../assets/mail.svg";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.aboutContainer}>
        <img src={MainLogo} className={styles.logo} />
        <div>
          <div>
            <p>
              <img src={PhoneIcon} height={18} width={18} />
              +7 (999) 999-99-99
            </p>
          </div>
          <p>
            <img src={MailIcon} height={18} width={18} />
            govnovoz@mail.ru
          </p>
        </div>
      </div>
      <nav className={styles.nav}>
        <Link to={'products'} className={styles.navLink}>Группа 1</Link>
        <p>Группа 2</p>
        <p>Группа 3</p>
        <p>Группа 4</p>
        <p>Группа 5</p>
      </nav>
    </header>
  );
};

export default Header;
