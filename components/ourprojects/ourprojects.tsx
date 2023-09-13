import Image from 'next/image'

import { Carousel2 } from '../carousel/carousel'
import Triangle1 from '../../assets/triangle1.svg'
import Triangle2 from '../../assets/triangle2.svg'
import Triangle3 from '../../assets/triangle3.svg'
import styles from './ourprojects.module.css'

export default function OurProjects() {
    return (
        <div className={`${styles.contentWrapper} container`}>
            <div>
                <h3 className={styles.title}>OUR PROJECTS</h3>
                <hr className={styles.hr} />
                <Carousel2 />
            </div>
            <div className={styles.triangles}>
                <div className={styles.triangleWrapper}>
                    <Image src={Triangle1} className={styles.triangle1} width={350} height={300} alt="triangle 1" />
                </div>
                <div className={styles.triangleWrapper}>
                    <Image src={Triangle3} className={styles.triangle2} width={350} height={300} alt="triangle 2" />
                </div>
                <div className={styles.triangleWrapper}>
                    <Image src={Triangle2} className={styles.triangle3} width={350} height={300} alt="triangle 3" />
                </div>
            </div>
        </div>
    )
}