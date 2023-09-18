import Image from 'next/image'

import styles from './partnership.module.css'
import Picsart from '../../assets/picsart.png'
import Amazon from '../../assets/amazon.png'
import Instigate from '../../assets/instigate.png'
import Ecosyntex from '../../assets/ecosyntex.png'

export function Partnership() {
    return (
        <div className={`${styles.contentWrapper} container`} id='partners'>
            <div className={styles.statistics}>
                <div className={styles.statisticItem}>
                    <div className={styles.elipse}>
                        <div className={styles.statisticsNumbersWrapper}>
                            <h6 className={styles.statisticsNumbersTitle}>7 500+</h6>
                            <p className={styles.statisticsSubTitle}>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
                <div className={styles.statisticItem}>
                    <div className={styles.elipse}>
                        <div className={styles.statisticsNumbersWrapper}>
                            <h6 className={styles.statisticsNumbersTitle}>8.52/10</h6>
                            <p className={styles.statisticsSubTitle}>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
                <div className={styles.statisticItem}>
                    <div className={styles.elipse}>
                        <div className={styles.statisticsNumbersWrapper}>
                            <h6 className={styles.statisticsNumbersTitle}>350+</h6>
                            <p className={styles.statisticsSubTitle}>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.titleAndContentWrapper}>
                <div className={styles.titleDiv}>
                    <h2 className={styles.title}>SERVICE PARTNERSHIP</h2>
                    <p className={styles.subTitle}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.contentDiv}>
                    <p className={styles.content}>More than 85% of our clients have been using our services for a long-term sticking with us for over 3+ years. We are like a family. We love them as much as they love us. We have a 97.9% clients' repetition rate. In other words. 97.9% of our clients keep choosing PADC for their business needs and our developers completed more than 30 projects with 100% project completion rate. We worked with 5+ industries.</p>
                </div>
                <div className={styles.partnersDiv}>
                    <Image src={Picsart} height={50} alt="Picsart" />
                    <Image src={Instigate} height={50} alt="Instigate" />
                    <Image src={Ecosyntex} height={50} alt="Ecosyntax" />
                    <Image src={Amazon} height={50} alt="Amazon" />
                </div>
            </div>
        </div>
    )
}