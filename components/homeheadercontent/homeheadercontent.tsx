import Image from 'next/image'

import styles from './homeheadercontent.module.css'

const HomeHeaderContent = () => {
    return (
        <div className={`${styles.mainWrapper} container`}>
            <div className={styles.mainDiv} >
                <div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.homeHeaderContent}>
                            <p className={styles.subTitle}>Get the web's modern capabilities</p>
                            <h2 className={styles.title}>We Design. We Develop. We <span className={styles.selectedWordInTitle}>Inspire.</span></h2>
                            <div className={styles.contentDiv}>
                                <p className={styles.content}>Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from padcllc.com.</p>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <Image src='/padcMainImage.svg' height={430} width={550} alt="slider image" priority />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeaderContent