import styles from './LotusGroup.module.css'; 
import Lotus from '@/components/Lotus'; 

export default function LotusGroup() {
  return(
    <div className={styles.lotuses}>
      <Lotus style={{transform: "translate(90px, 250px)"}}/>
      <Lotus width="100px" height="100px" style={{transform: "translate(170px, 200px)"}}/>
      <Lotus width="150px" height="150px" style={{transform: "translate(180px, 200px)"}}/>
      <Lotus width="350px" height="350px" style={{transform: "translate(150px, 200px)"}}/>
      <Lotus width="200px" height="200px" style={{transform: "translate(190px, 320px)"}}/>
      <Lotus width="250px" height="250px" style={{transform: "translate(190px, 190px)"}}/>
      <Lotus width="175px" height="175px" style={{transform: "translate(200px, 50px)"}}/>
      <Lotus width="325px" height="325px" style={{transform: "translate(270px, 100px)"}}/>
      <Lotus width="275px" height="275px" style={{transform: "translate(290px, 100px)"}}/>
      <Lotus width="375px" height="375px" style={{transform: "translate(390px, 150px)"}}/>
    </div>
  )
}