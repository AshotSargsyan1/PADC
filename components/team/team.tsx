'use client'

import Image from 'next/image'
import Slider from 'react-slick';

import styles from './team.module.css'
import { Carousel3 } from '../carousel/carousel';

export function Team() {




    return (
        <div className={`${styles.contentWrapper} container`}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>OUR TEAM</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.ourTeamContentWrapper}>
                <p className={styles.ourTeamContent}>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <Carousel3 />
        </div>
    )
}
