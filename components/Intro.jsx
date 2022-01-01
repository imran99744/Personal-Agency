import styles from "../styles/Intro.module.css"
import Image from "next/image"
import { Circle } from "./Circle"


export const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh"/>
            <Circle backgroundColor="#01c686" right="-40vh"/>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>ADVOCADO</span> DIGITAL <br></br>PRODUCT AGENCY</h1>
                    <p className={styles.des}>Create live segments and target the right people for messages based on their behaviors.</p>
                    <button className={styles.button}>DISCOVER</button>

            </div>
            <div className={styles.card}>
            <Image src="/img/Avocado.png" alt="" width="100%" height="100%" layout="fill" objectFit="cover"/>
            </div>
            
        </div>
    )
}
