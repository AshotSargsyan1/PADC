import Image from 'next/image'
import { Carousel2 } from '../carousel/carousel'
import { IProjects } from '@/models/interfaces/ourprojects'

import styles from './ourprojects.module.css'

export function getProjects(): Promise<IProjects> {
    return fetch('https://api.padcllc.com/projects', { next: { revalidate: 150 } })
        .then(res => res.json())
        .catch(_ => alert("Something went wrong!!!"))
}

export default async function OurProjects() {

    const projects = await getProjects()

    return (
        <div className={`${styles.contentWrapper}`} id='projects'>
            <div>
                <h3 className={styles.title}>OUR PROJECTS</h3>
                <hr className={styles.hr} />
                <Carousel2 projectsData={projects} />
            </div>
            <div className={styles.triangles}>
                <div className={styles.triangleMainWrapper}>
                    <div className={styles.triangleWrapper1}>
                        <Image src='/triangle1.svg' width={350} height={300} alt="triangle 1" />
                    </div>
                    <div className={styles.triangleWrapper2}>
                        <Image src='/triangle2.svg' width={350} height={300} alt="triangle 2" />
                    </div>
                    <div className={styles.triangleWrapper3}>
                        <Image src='/triangle3.svg' width={350} height={300} alt="triangle 3" />
                    </div>
                </div>
            </div>
        </div>
    )
}