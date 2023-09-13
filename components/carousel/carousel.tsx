'use client'
import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import padclogo from '../../assets/padc_logo.svg'
import fakeAvatarImage from '../../assets/alen.png'
import prevIcon from '../../assets/prevIcon.svg'
import nextIcon from '../../assets/nextIcon.svg'
import slideImage from '../../assets/slideimg.png'
import styles from './carousel.module.css'

export default function Carousel() {

    const [dataForSlide] = useState([
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
    ])

    const settings = {
        dots: true,
        infinite: dataForSlide.length > 3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={`${styles.sliderWrapper} container`}>
            <div className={styles.mainDiv} >
                <Slider {...settings}>
                    {dataForSlide.map(slide => {
                        return (
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <div className={styles.slideContent} >
                                        <p className={styles.subTitle}>{slide.subTitle}</p>
                                        <h2 className={styles.title}>{slide.title}</h2>
                                        <div className={styles.contentDiv}>
                                            <p className={styles.content}>{slide.content}</p>
                                        </div>
                                    </div>
                                    <div className={styles.slideImgDiv}>
                                        <Image src={slide.img} height={500} width={570} alt="slider image" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};






export const Carousel2 = () => {

    const [dataForSlide] = useState([
        {
            title: 'WASHBOT',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
        },
        {
            title: '123',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
        },
        {
            title: '222 ',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
        }
    ])

    const settings = {
        dots: true,
        infinite: dataForSlide.length > 3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={`${styles.sliderWrapper2} container`}>
            <Slider className={styles.slider} {...settings}>
                {dataForSlide.map(data => {
                    return (
                        <div>
                            <div className={styles.slideContent2}>
                                <h2 className={styles.title2}>{data.title}</h2>
                                <div className={styles.contentDiv}>
                                    <p className={styles.content2}>{data.content}</p>
                                </div>
                                <button className={styles.viewMoreBtn}>VIEW MORE</button>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export const Carousel3 = () => {

    const employeers = [
        {
            nameAndSurename: 'SATEN GEVORGYAN',
            profession: 'QUALITY ASSURANCE ENGINNER'
        },
        {
            nameAndSurename: 'ZHANNA POGHOSSIAN',
            profession: 'FRONT-END ENGINNER'
        },
        {
            nameAndSurename: 'ROBERT GRKIKYAN',
            profession: 'REACT-NATIVE DEVELOPER'
        },
        {
            nameAndSurename: 'SATEN GEVORGYAN',
            profession: 'QUALITY ASSURANCE ENGINNER'
        },
        {
            nameAndSurename: 'ZHANNA POGHOSSIAN',
            profession: 'FRONT-END ENGINNER'
        },
        {
            nameAndSurename: 'ROBERT GRKIKYAN',
            profession: 'REACT-NATIVE DEVELOPER'
        }
    ]

    const settings = {
        dots: true,
        infinite: employeers.length > 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.ourTeamInfo}>
            <Slider {...settings}>
                {employeers.map(emp => {
                    return (
                        <div className={styles.cardWrapper}>
                            <figure className={styles.cardInfo}>
                                <div className={styles.darkDivOnCard}></div>
                                <Image src={fakeAvatarImage} alt='card image' className={styles.cardImg} />
                                <figcaption>
                                    <h3 className={styles.nameAndSurename}>{emp.nameAndSurename}</h3>
                                    <div className={styles.profession}>
                                        <p className={styles.professionP}>{emp.profession}</p>
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
