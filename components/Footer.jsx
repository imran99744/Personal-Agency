import styles from "../styles/Footer.module.css"
import Image from "next/image"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cartL}>
                <h1 className={styles.title}>AVOCADO CREATIVES</h1>
                <h1 className={styles.linkTitle}>
                    <span className={styles.linkText}>Work With US</span>
                    <Image className={styles.link} src={`/img/link.png`} width="40px" height="40px" />
                    
                    </h1>

            </div>
            <div className={styles.cartS}>
                <div className={styles.cardItem}>
                    13 street west edmonton <br/> Canada
                </div>
                <div className={styles.cardItem}>
                    014794945252
                </div>
                <div className={styles.cardItem}>
                    Contact@imran.com
                </div>
                <div className={styles.cardItem}>
                    @imransoftware agency all right reserves
                </div>
            </div>
            <div className={styles.cartS}>
            <div className={styles.cardItem}>
                    13 street west edmonton <br/> Canada
                </div>
                <div className={styles.cardItem}>
                    014794945252
                </div>
                <div className={styles.cardItem}>
                    Contact@imran.com
                </div>
                <div className={styles.cardItem}>
                    @imransoftware agency all right reserves
                </div>
            </div>
            
            
        </div>
    )
}
