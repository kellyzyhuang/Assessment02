import styles from './Header.module.css'

export default function Header() {
  return(
    <header className={styles.header}>
      <ul className={styles.list}>
        <li><a className={styles.a} href="#">Home</a></li>
        <li><a className={styles.a} href="#">About</a></li>
        <li><a className={styles.a} href="#">Contact</a></li>
      </ul>
    </header>
  )
}