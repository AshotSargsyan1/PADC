"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Avatar from '../../assets/employeeLogo.png'
import styles from './jobadvertisment.module.css'
import { ISingleCareer } from '@/models/interfaces/career'

export default function JobAdvertisment(data: ISingleCareer) {
    const [showDescription, setShowDescription] = useState<boolean>(false)

    return (
        <div className={`${styles.contentWrapper} container`}>
            <div className={styles.previousData}>
                <div className={styles.avatar}>
                    <Image src={Avatar} height={135} width={135} alt='avatar' />
                </div>
                <div className={styles.titleAndContentWrapper}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <p className={styles.content}>{data.shortDescription}</p>
                    <div className={styles.showMoreDiv}>
                        <p className={styles.showMore} onClick={() => setShowDescription(!showDescription)}>{showDescription ? 'Show less' : 'Show more'}</p>
                    </div>
                </div>
                <div className={styles.contentChunks}>
                    <Link href="/career/#request" className={styles.joinUs}>Join Us</Link>
                </div>
            </div>
            <div hidden={!showDescription} dangerouslySetInnerHTML={{ __html: data.description }} className={styles.vacancieDescription} />
        </div>
    )
}
