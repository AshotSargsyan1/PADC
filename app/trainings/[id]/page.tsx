import { FC } from "react"
import Image from "next/image"
import { Metadata } from "next"

import { HeaderContent } from "@/components/headercontent/headercontent"
import { Request } from "@/components/request/request"
import { Contact } from "@/components/contact/contact"
import { ISingleTraining, ISingleTrainingProps, ITrainingData } from "@/models/interfaces/trainings"
import styles from './page.module.css'

export async function generateMetadata({ params: { id } }: ISingleTrainingProps) {
    const singleTrainingData: Promise<ITrainingData> | undefined = await fetch(`https://api.padcllc.com/trainings/${id}`, { cache: 'no-store' })
        .then(res => res.json())
        .catch(_ => alert('Something went wrong!!!'))

    if (singleTrainingData) {
        return {
            title: (await singleTrainingData).name,
            description: (await singleTrainingData).description
        }
    }
}

export function getSingleTraining(id: string): Promise<ISingleTraining> {
    return fetch(`https://api.padcllc.com/trainings/${id}`, { cache: 'no-store' })
        .then(res => res.json())
        .catch(_ => alert("Something went wrong!!!"))
}

const SingleTraining: FC<ISingleTrainingProps> = async ({ params: { id } }) => {

    const singleTraining = await getSingleTraining(id)

    return (
        <>
            <HeaderContent forAllTrainings={true} />
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
                        <div>
                            <h2 className={styles.dateAndLocation}>Date: <span className={styles.dateAndLocationData}>{singleTraining.data.date}</span></h2>
                            <h2 className={styles.dateAndLocation}>Location: <span className={styles.dateAndLocationData}>Mher Mkrtchyan 47/1 3101 Gyumri, Armenia</span></h2>
                        </div>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${singleTraining.data.mediaFiles.path}`} height={315} width={545} alt={`${singleTraining.data.name} image`} />
                    </div>

                </div>
            </div>
            <Request />
            <Contact />
        </>
    )
}

export default SingleTraining;