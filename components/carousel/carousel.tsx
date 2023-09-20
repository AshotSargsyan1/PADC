'use client'
import Image from 'next/image';
import Slider from 'react-slick';

import slideImage from '../../assets/slideimg.png'
import styles from './carousel.module.css'
import { ISliderSettings } from '@/models/interfaces/carousel';

export default function Carousel() {


    return (
        <div className={`${styles.sliderWrapper} container`}>
            <div className={styles.mainDiv} >
                <div>
                    <div className={styles.slideContentWrapper}>
                        <div className={styles.slideContent}>
                            <p className={styles.subTitle}>Get the web's modern capabilities</p>
                            <h2 className={styles.title}>We Design. We Develop. We <span className={styles.selectedWordInTitle}>Inspire.</span></h2>
                            <div className={styles.contentDiv}>
                                <p className={styles.content}>Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from padcllc.com.</p>
                            </div>
                        </div>
                        <div className={styles.slideImgDiv}>
                            <Image src={slideImage} height={380} width={510} alt="slider image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const Carousel2 = ({ projectsData }: any) => {

    const settings: ISliderSettings = {
        dots: true,
        infinite: projectsData.data.length > 3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className={`${styles.sliderWrapper2} container`}>
            <Slider className={styles.slider} {...settings}>
                {!!projectsData.data.length && projectsData.data.map((data: any) => {
                    return (
                        <div key={data.id}>
                            <div className={styles.slideContent2}>
                                <h3 className={styles.title2}>{data.title}</h3>
                                <div className={styles.contentDiv}>
                                    <p className={styles.content2}>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export const Carousel3 = (team: any) => {

    const settings: ISliderSettings = {
        dots: true,
        infinite: team.team.length > 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };

    return (
        <div className={styles.ourTeamInfo}>
            <Slider {...settings}>
                {!!team.team.length && team.team.map((employee: any) => {
                    return (
                        <div className={styles.cardWrapper}>
                            <figure className={styles.cardInfo}>
                                <div className={styles.darkDivOnCard}></div>
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}assets/images/team/${employee.image}`} width={500} height={570} alt='card image' className={styles.cardImg} priority/>
                                <figcaption>
                                    <h3 className={styles.nameAndSurename}>{employee.name}</h3>
                                    <div className={styles.profession}>
                                        <p className={styles.professionP}>{employee.description}</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    )
                })}
            </Slider >
        </div >

    );
}













{/* <div className={styles.btnsForSlide}>
                <Image src={prevIcon} onClick={handlePrevious} className={styles.indicatorBtn} alt='slide indicators' />
                {dataForSlide.map(data => {
                    return <div className={styles.elipse} />
                })}
                <Image src={nextIcon} onClick={handleNext} className={styles.indicatorBtn} alt='slide indicators' />
            </div> */}

// const length: number = dataForSlide.length;

// const handlePrevious = (): void => {
//     const newIndex = index - 1;
//     setIndex(newIndex < 0 ? length - 1 : newIndex);
// };

// const handleNext = (): void => {
//     const newIndex = index + 1;
//     setIndex(newIndex >= length ? 0 : newIndex);
// };



// const [index, setIndex] = useState<number>(0);




{/* <Slider {...settings}> */ }
{/* </Slider> */ }



/*const [dataForSlide] = useState([
    {
        img: padclogo,
        subTitle: 'Get the web\'s modern capabilities',
        title: 'We Design. We Develop. We Inspire.',
        content: 'Get the web\'s modern capabilities on your own sites and apps with useful guidance and analysis from padcllc.com.'
    },
    {
        img: slideImage,
        subTitle: '111',
        title: 'We Design. We Develop. We Inspire.',
        content: 'Get the web\'s modern capabilities on your own sites and apps with useful guidance and analysis from padcllc.com.'
    },
    {
        img: padclogo,
        subTitle: '222',
        title: 'We Design. We Develop. We Inspire.',
        content: 'Get the web\'s modern capabilities on your own sites and apps with useful guidance and analysis from padcllc.com.'
    },
    {
        img: padclogo,
        subTitle: '222',
        title: 'We Design. We Develop. We Inspire.',
        content: 'Get the web\'s modern capabilities on your own sites and apps with useful guidance and analysis from padcllc.com.'
    }
])*/


// const settings: ISliderSettings = {
//     dots: true,
//     infinite: dataForSlide.length > 3,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false
// };