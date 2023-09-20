import Carousel from '../carousel/carousel'

import styles from './headercontent.module.css'

export function HeaderContent({ forAllTrainings, forCareer }: any) {

    function forWhichPlace(): JSX.Element {
        if (forAllTrainings) {
            return (
                <div className={`${styles.titleAndContentWrapper} container`}>
                    <h1 className={styles.title}>About PADC <span className={styles.selectedWordInTitle}>Trainings</span></h1>
                    <p className={styles.content}>The PADC Academy began in the Fall of 2020, by our Co-Founders Tigran Barseghyan and Radik Poghossian taught at PADC for 2 years and ran the Education Academy for most of their time here. PADC Academie is designed to function as small-schools-within-a-school for at-risk students and other students looking for a more personal educational experience. Our Academy provides individual teacher-to-student support, a dedicated team of teachers and support staff, cross-curricular units and projects, and a focus on developing life-skills.</p>
                </div>
            )
        } else if (forCareer) {
            return (
                <div className={`${styles.titleAndContentWrapper} container`}>
                    <h1 className={styles.title}>About PADC <span className={styles.selectedWordInTitle}>Career</span></h1>
                    <p className={styles.content}>At PADC, we understand that our success is built on the skills and talent of our employees. We strive to create a dynamic and supportive work environment that encourages personal and professional growth. As a rapidly growing IT company, we are always looking for talented individuals to join our team. We offer a range of career opportunities across departments, from software development and data analysis to project management and customer support. Whether you're just starting your career or looking to take the next step, we believe that PADC is the perfect place for you to grow and succeed. Our commitment to continuous learning and development means that you will have access to the training and resources you need to reach your full potential. We are proud of our inclusive and diverse workplace, and believe that different perspectives and experiences make us stronger. We welcome applicants of all backgrounds and experiences, and are committed to providing equal employment opportunities to all employees and applicants. Join us today and be a part of a team that is shaping the future of technology. We can't wait to see what you'll bring to the table. To apply, please visit our careers page and submit your resume and cover letter. We look forward to hearing from you!</p>
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