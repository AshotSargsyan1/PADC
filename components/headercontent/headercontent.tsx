import Carousel from '../carousel/carousel'
import styles from './headercontent.module.css'

export function HeaderContent({ forAllTrainings }: any) {

    function forWhichPlace(): JSX.Element {
        if (forAllTrainings) {
            return (
                <div className={`${styles.titleAndContentWrapper} container`}>
                    <h1 className={styles.title}>About PADC <span className={styles.selectedWordInTitle}>Trainings</span></h1>
                    <p className={styles.content}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            )
        } else {
            return (
                <div className={styles.headerCarouselDiv}>
                    <Carousel />
                </div>
            )
        }
    }
    return (
        <>
            {forWhichPlace()}
        </>
    )
}



{/* <div className={styles.padcLlcYear}>
                <p className={styles.padcLlcYearP}>© 2020 PADC LLC.</p>
            </div> */}