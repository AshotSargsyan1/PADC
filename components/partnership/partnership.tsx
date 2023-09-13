import Image from 'next/image'

import styles from './partnership.module.css'
import Amazon from '../../assets/amazon.png'
import Instigate from '../../assets/instigate.png'
import Ecosyntex from '../../assets/ecosyntex.png'
import Picsart from '../../assets/picsart.png'

export function Partnership() {
    return (
        <div className={`${styles.contentWrapper} container`}>
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
                    <p className={styles.content}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <button className={styles.viewMore}>VIEW MORE</button>
                </div>
                <div className={styles.partnersDiv}>
                    <Image src={Amazon} alt="Amazon" />
                    <Image src={Ecosyntex} alt="Ecosyntax" />
                    <Image src={Instigate} alt="Instigate" />
                    <Image src={Picsart} alt="Picsart" />
                </div>
            </div>
        </div>
    )
}