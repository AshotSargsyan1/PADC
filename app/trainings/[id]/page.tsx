import { FC } from "react"
import Image from "next/image"
import { notFound } from 'next/navigation'
import { Metadata } from "next"

import { HeaderContent } from "@/components/headercontent/headercontent"
import { Request } from "@/components/request/request"
import { Contact } from "@/components/contact/contact"
import { ISingleTraining, ISingleTrainingProps } from "@/models/interfaces/trainings"
import styles from './page.module.css'
import { HeaderContentFrom } from "@/models/enums/headercontent"
import { getSingleTraining } from "@/app/actions/trainings"

export async function generateMetadata({ params: { id } }: ISingleTrainingProps): Promise<Metadata> {
    const singleTrainingData: ISingleTraining = await getSingleTraining(id)

    return {
        title: `${singleTrainingData.data?.name} - PADC LLC`,
        description: `PADC LLC will do training - ${singleTrainingData.data?.name}`
    }
}

export default async function SingleTraining({ params: { id } }: ISingleTrainingProps) {

    const singleTraining = await getSingleTraining(id)

    if (!singleTraining.data) {
        return notFound()
    }

    return (
        <>
            <HeaderContent from={HeaderContentFrom.SINGLETRAINING} trainingName={singleTraining.data.name} />
            <div className={`${styles.trainingContentWrapper} container`}>
                <div className={styles.contentChunk}>
                    <div>
                        <h2 className={styles.title}>{singleTraining.data.name}</h2>
                        <hr className={styles.hr} />
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: singleTraining.data.description }} />
                    </div>
                </div>
                <div className={styles.contentChunk}>
                    <div className={styles.imageAndAboutWrapper}>
                        <div className={styles.aboutWrapper}>
                            <h2 className={styles.dateAndLocation}>Date: <span className={styles.dateAndLocationData}>{singleTraining.data.date}</span></h2>
                            <h2 className={styles.dateAndLocation}>Location: <span className={styles.dateAndLocationData}>Mher Mkrtchyan 47/1 3101 Gyumri, Armenia</span></h2>
                        </div>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${singleTraining.data.mediaFiles.path}`} height={315} width={545} alt={`${singleTraining.data.name} image`} className={styles.image} />
                    </div>

                </div>
            </div>
            <Request />
            <Contact />
        </>
    )
}