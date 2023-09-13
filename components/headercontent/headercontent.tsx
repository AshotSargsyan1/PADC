import Carousel from '../carousel/carousel'
import styles from './headercontent.module.css'

export function HeaderContent() {
    return (
        <>
            <div className={styles.headerCarouselDiv}>
                <Carousel />
            </div>
        </>
    )
}



{/* <div className={styles.padcLlcYear}>
                <p className={styles.padcLlcYearP}>© 2020 PADC LLC.</p>
            </div> */}