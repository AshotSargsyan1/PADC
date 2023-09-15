import { Metadata } from "next";
import Header from "@/components/header/header";

import { Contact } from "@/components/contact/contact";
import { HeaderContent } from "@/components/headercontent/headercontent";
import { generateMetadataPerPage } from "@/helpers/metadata";
import styles from './page.module.css'

export const metadata: Metadata = generateMetadataPerPage('PADC - Trainings')

export function getProjects() {
    return fetch('https://api.padcllc.com/trainings', { next: { revalidate: 150 } }).then(res => res.json())
}

export default async function Trainings() {

    const trainings = await getProjects()

    function doc(code: any) {
        return code.match(/<li>(.*?)<\/li>/g)
    }

    return (
        <>
            <Header />
            <HeaderContent forAllTrainings={true} />
            <main>
                <div className={`${styles.announcementsWrapper} container`}>
                    {!!trainings.data && trainings.data.map((training: any) => {
                        return (
                            <div className={styles.announcement}>
                                <h2>{training.name}</h2>
                                {/* {<div dangerouslySetInnerHTML={{ __html: doc(training.description) }} />} */}
                            </div>
                        )
                    })}
                </div>
                <Contact />
            </main>
        </>
    )
}
