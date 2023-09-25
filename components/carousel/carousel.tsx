'use client'
import Image from 'next/image';
import Slider from 'react-slick';

import styles from './carousel.module.css'
import { ISliderSettings } from '@/models/interfaces/carousel';

export const Carousel2 = ({ projectsData }: any) => {
    const settings: ISliderSettings = {
        dots: true,
        infinite: projectsData?.data?.length > 3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className={`${styles.sliderWrapper2} container`}>
            <Slider className={styles.slider} {...settings}>
                {!!projectsData?.data?.length && projectsData.data.map((data: any) => {
                    const [content, technologies] = data.description.split('<hr>')
                    return (
                        <div key={data.id}>
                            <div className={styles.slideContent2}>
                                <h3 className={styles.title2}>{data.title}</h3>
                                <div className={styles.contentDiv}>
                                    <p>{content}</p>
                                    <hr className={styles.hr} />
                                    <div dangerouslySetInnerHTML={{ __html: technologies }} className={styles.technologiesDiv}/>
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
        infinite: team?.team?.length > 3,
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
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}assets/images/team/${employee.image}`} width={500} height={570} alt='card image' className={styles.cardImg} priority />
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
            </Slider>
        </div >

    );
}