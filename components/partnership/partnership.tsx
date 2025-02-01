import Image from 'next/image'

import { StatisticsGenerateString } from '@/models/enums/partnership'
import styles from './partnership.module.css'
import Picsart from '../../assets/picsart.png'
import Amazon from '../../assets/amazon.png'
import Instigate from '../../assets/instigate.png'
import Ecosyntex from '../../assets/ecosyntex.png'

export function Partnership() {

    function createStatistics(count: number, type: StatisticsGenerateString): JSX.Element {
        return (
            <div className={styles.statisticItem}>
                <div className={styles.elipse}>
                    <div className={styles.statisticsNumbersWrapper}>
                        <h6 className={styles.statisticsNumbersTitle}>{count} +</h6>
                        <p className={styles.statisticsSubTitle}>{type}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`${styles.contentWrapper} container`} id='partners'>
            <div className={styles.statistics}>
                {createStatistics(6, StatisticsGenerateString.WORKSHOPS)}
                {createStatistics(15, StatisticsGenerateString.INTERSHIPERS)}
                {createStatistics(50, StatisticsGenerateString.STUDENTS)}
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