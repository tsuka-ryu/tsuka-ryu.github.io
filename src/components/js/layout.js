import React from "react"
import styles from "../css/layout.module.css"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.topwrapper}>
        <div className={styles.container}>
          <h1>PORTFOLIO</h1>
          <p>@tsuka_ryu</p>
        </div>
      </div>

      <header className={styles.header + ' ' + styles.fixed} id="header">
        <ul>
          <button onClick={() => scrollTo('#profile')} className={styles.nav}>PROFIEL</button>
          <button onClick={() => scrollTo('#skill')} className={styles.nav}>SKILL</button>
          <button onClick={() => scrollTo('#works')} className={styles.nav}>WORKS</button>
          <button onClick={() => scrollTo('#contact')} className={styles.nav}>CONTACT</button>
        </ul>
      </header>

      {children}

      <footer className={styles.footer}>
        <ul>
          <button onClick={() => scrollTo('#profile')} className={styles.nav}>PROFIEL</button>
          <button onClick={() => scrollTo('#skill')} className={styles.nav}>SKILL</button>
          <button onClick={() => scrollTo('#works')} className={styles.nav}>WORKS</button>
          <button onClick={() => scrollTo('#contact', 'end')} className={styles.nav}>CONTACT</button>
        </ul>
        <p>Copyright©@tsuka_ryu. All Rights Reserved.</p>
      </footer>
    </div>
  )
}