import Header from "@/components/header/header";

import styles from './page.module.css'
import { Contact } from "@/components/contact/contact";

export default function Trainings() {
    return (
        <>
            <Header />
            <main>
                <div className={styles.announcementWrapper}>

                </div>
                <Contact />
            </main>
        </>
    )
}
