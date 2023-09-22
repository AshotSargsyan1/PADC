import Image from "next/image";
import Link from "next/link"
import { Metadata } from "next";

import { Contact } from "@/components/contact/contact";
import { HeaderContent } from "@/components/headercontent/headercontent";
import { generateMetadataPerPage } from "@/helpers/metadata";
import styles from './page.module.css'
import { ITraining, ITrainingData } from "@/models/interfaces/trainings";

export const metadata: Metadata = generateMetadataPerPage('PADC - Trainings')

export function getProjects(): Promise<ITraining> {
    return fetch('https://api.padcllc.com/trainings', { next: { revalidate: 150 } }).then(res => res.json())
}

export default async function Trainings() {

    const trainings = await getProjects()

    return (
        <>
            <HeaderContent forAllTrainings={true} />
            <main>
                <div className={`${styles.announcementsWrapper} container`}>
                    {!!trainings.data && trainings.data.map((training: ITrainingData) => {
                        return (
                            <div className={styles.announcement}>
                                <div className={styles.coverDiv}></div>
                                <div className={styles.coverDivContent}>
                                    <span className={styles.spanLine}></span>
                                    <span className={styles.spanLine}></span>
                                    <span className={styles.spanLine}></span>
                                    <span className={styles.spanLine}></span>
                                    <Link href={`/trainings/${training.id}`} className={styles.joinBtn}>Join</Link>
                                    <p className={styles.trainingName}>{training.name}</p>
                                    <p className={styles.trainingName}>{training.date}</p>
                                </div>
                                <figcaption className={styles.imageFigcaption}>
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}${training.mediaFiles.path}`} height={205} width={350} alt={`${training.name} image`} priority />
                                </figcaption>
                            </div>
                        )
                    })}
                </div>
                <Contact />
            </main>
        </>
    )
}
