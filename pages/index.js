import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react"; 
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 
import Background from '@/components/Background'; 
import Button from '@/components/Button';
import Image from 'next/image'
import SteamRight from '@/components/SteamRight'; 
import SteamLeft from '@/components/SteamLeft'; 
import Lotus from '@/components/Lotus'; 


export default function Home() {

  const [input, setInput] = useState(); 

  // Maplestory
  const classFilters = {
    // key : value 
    1: 'Rat',
    2: 'Ox', 
    4: 'Tiger', 
    8: 'Rabbit', 
    16: 'Dragon', 
    32: 'Snake'
  }
                                    // input = 3
                                    // input = 2 flagValue = 2
                                    // input = 1 flagValue = 1
  const getClassStyle = flagValue => (input & flagValue) > 0 ? { backgroundColor: "var(--dark-red)" } : null; 

  return (
    <>
      <Head>
        <title>Assessment 2</title>
        <meta name="description" content="This is for assessment 2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
        <input className={styles.input}
            id="input"
            type="text"
            placeholder="Enter a number"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <table className={styles.table}>
            <tbody>
            {
                Object.keys(classFilters).map(item => (
                  <tr className={styles.tr} key={item} style={getClassStyle(item)}>
                    <td className={styles.item}>{item}</td>
                    <td className={styles.item}>{classFilters[item]}</td>
                  </tr>
                ))
            }
            </tbody>
          </table>
          <Button/>
          <div className={styles.lanterns}>
            <Image src={'/images/Lanterns5.svg'} alt="lantern" width={400} height={150} className={styles.lantern}/>
          </div>
          <div className={styles.dragonleftcontainer}>
            <Image src={'/images/DragonLeft2.svg'} alt="dragon left" width={500} height={1050} className={styles.dragonleft}/>
          </div>
          <SteamRight/>
          <div className={styles.dragonrightcontainer}>
            <Image src={'/images/DragonRight2.svg'} alt="dragon right" width={500} height={1050} className={styles.dragonright}/>
          </div>
          <SteamLeft/>
          <Background/>
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
      </main>
      <Footer/>
    </>
  );
}
