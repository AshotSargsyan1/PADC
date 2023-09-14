import { Carousel3 } from '../carousel/carousel';
import styles from './team.module.css'

export function getTeamData() {
    return fetch('https://padcllc.com/assets/data/team.json', {next: { revalidate: 1 }}).then(res => res.json())
}

export async function Team() {
    const teamData = await getTeamData()

    return (
        <div className={`${styles.contentWrapper} container`}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>OUR TEAM</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.ourTeamContentWrapper}>
                <p className={styles.ourTeamContent}>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <Carousel3 team = {teamData}/>
        </div>
    )
}
