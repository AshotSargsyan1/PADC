import Image from 'next/image'

import Keyword1 from '../../assets/keywords1.svg'
import styles from './whatwedo.module.css'

export function WhatWeDo() {
    return (
        <div className={`${styles.contentWrapper} container`} id='whatwedo'>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}>WHAT WE DO</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.whatWeDoStepsWrapper}>
                <div>
                    <div className={styles.circle}>
                        <div className={styles.logoWrapper}>
                            
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}