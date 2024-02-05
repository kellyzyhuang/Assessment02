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
import LotusGroup from '@/components/LotusGroup'; 


export default function Home() {

  const [input, setInput] = useState(); 

  const classFilters = {
    1: 'Rat',
    2: 'Ox', 
    4: 'Tiger', 
    8: 'Rabbit', 
    16: 'Dragon', 
    32: 'Snake'
  }

  const getClassStyle = flagValue => (input & flagValue) > 0 ? { backgroundColor: "var(--dark-red)" } : null; 

  return (
    <>
      <Head>
        <title>Assessment 2</title>
        <meta name="description" content="This is for assessment 2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Dragon.ico" />
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
          <LotusGroup/>
      </main>
      <Footer/>
    </>
  );
}
