import Image from 'next/image'

import Avatar from '../../assets/employeeLogo.png'
import styles from './jobadvertisment.module.css'

export default function JobAdvertisment() {
    return (
        <div className={`${styles.contentWrapper} container`}>
            <div className={`${styles.contentChunks} ${styles.avatar}`}>
                <Image src={Avatar} height={165} width={165} alt='avatar' />
            </div>
            <div className={`${styles.contentChunks} ${styles.titleAndContentWrapper}`}>
                <h2 className={styles.title}>HR Manager</h2>
                <p className={styles.content}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly</p>
                <div className={styles.showMoreDiv}>
                    <p className={styles.showMore}>Show more</p>
                </div>
            </div>
            <div className={styles.contentChunks}>
                <button className={styles.joinUs}>Join Us</button>
            </div>
        </div>
    )
}
