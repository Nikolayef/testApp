import React from "react"
import Watch from "../Watch/Watch"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import styles from "./Header.module.css"
import Logo from "../../assets/logo.svg"

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <img src={Logo} alt='Logo' className={styles.logo} />
        <div className={styles.controls}>
          <LanguageSwitcher />
          <Watch />
        </div>
      </header>
    )
  }
}

export default Header
