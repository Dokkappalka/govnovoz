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
              +7 (925) 077-52-33
            </p>
          </div>
          <div>
            <p>
              <img src={PhoneIcon} height={18} width={18} />
              +7 (966) 119-85-86
            </p>
          </div>
          <p>
            <img src={MailIcon} height={18} width={18} />
            alfa-agri@mail.ru
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
