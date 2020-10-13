import React from "react"
import { Link } from "gatsby"
import styles from "../css/layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.topwrapper}>
          <h1>PORTFOLIO</h1>
          <p>@tsuka_ryu</p>
      </div>

      <header className={styles.header + ' ' +styles.fixed}>
        <ul>
          <Link to="/" className={styles.nav} >PROFIEL</Link>
          <Link to="/" className={styles.nav} >SKILL</Link>
          <Link to="/" className={styles.nav} >WORKS</Link>
          <Link to="/" className={styles.nav} >CONTACT</Link>
        </ul>
      </header>

      {children}

      <footer className={styles.footer}>
        <ul>
          <Link to="/" className={styles.nav} >PROFIEL</Link>
          <Link to="/" className={styles.nav} >SKILL</Link>
          <Link to="/" className={styles.nav} >WORKS</Link>
          <Link to="/" className={styles.nav} >CONTACT</Link>
        </ul>
        <p>Copyright©@tsuka_ryu. All Rights Reserved.</p>
      </footer>
    </div>
  )
}