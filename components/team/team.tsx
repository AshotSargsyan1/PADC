import { Carousel3 } from '../carousel/carousel';
import styles from './team.module.css'

export function getTeamData() {
    return fetch('https://padcllc.com/assets/data/team.json', { next: { revalidate: 150 } })
        .then(res => res.json())
        .catch(_ => alert("Something went wrong!"))
}

export async function Team() {
    const teamData = await getTeamData()

    return (
        <div className={`${styles.contentWrapper} container`} id='team'>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>OUR TEAM</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.ourTeamContentWrapper}>
                <p className={styles.ourTeamContent}>The Faces Behind our Success</p>
            </div>
            <Carousel3 team={teamData} />
        </div>
    )
}
