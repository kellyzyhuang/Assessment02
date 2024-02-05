import styles from './Header.module.css'; 
import Image from 'next/image'; 

export default function Header() {
  return(
    <header className={styles.header}>
      <Image src={'/images/Hamburger.svg'} alt="hamburger menu icon" width={50} height={50} className={styles.menuIcon}/>
      <ul className={styles.list}>
        <li><a className={styles.a} href="#">Home</a></li>
        <li><a className={styles.a} href="#">About</a></li>
        <li><a className={styles.a} href="#">Contact</a></li>
      </ul>
    </header>
  )
}