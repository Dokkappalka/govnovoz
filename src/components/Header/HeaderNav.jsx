import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
const HeaderNav = () => {
    return  <nav className={styles.nav}>
    <div>
    <Link to={'products'} className={styles.navLink}>Продукция</Link>
    </div>
    <div>
    <p>Оборудование для сельского хозяйства и животноводства</p>
    <div className={styles.list}></div>
    </div>
    <div>
    <p>Сельскохозяйственная техника</p>
    </div>
    <div>
    <p>Контакты</p>
    </div>
  </nav>
}

export default HeaderNav