import styles from './Lotus.module.css'; 
import Image from 'next/image'; 

export default function Lotus({
  width,
  height,
  style,

}) {
  return(
    <Image src={'/images/Lotus.svg'} alt="lotus" width={300} height={300} className={styles.lotus} 
    style={{width: width, height: height, ...style}}/>
  )
}