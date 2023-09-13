import Header from "@/components/header/header";

import styles from './page.module.css'
import { Contact } from "@/components/contact/contact";
import { HeaderContent } from "@/components/headercontent/headercontent";

export default function Trainings() {
    return (
        <>
            <Header />
            <HeaderContent forAllTrainings={true} />
            <main>
                <div className={`${styles.announcementsWrapper} container`}>
                    <div className={styles.announcement}>

                    </div>
                    <div className={styles.announcement}>

                    </div>
                    <div className={styles.announcement}>

                    </div>
                    <div className={styles.announcement}>

                    </div>
                    <div className={styles.announcement}>

                    </div>
                    <div className={styles.announcement}>

                    </div>
                </div>
                <Contact />
            </main>
        </>
    )
}
