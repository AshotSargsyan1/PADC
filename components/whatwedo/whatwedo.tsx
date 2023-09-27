"use client"
import { useRef } from 'react'
import Image from 'next/image'

import keyword from '../../assets/keyword.svg'
import coding from '../../assets/coding.png'
import deploymant from '../../assets/deployment.png'
import webdesign from '../../assets/webdesign.png'
import styles from './whatwedo.module.css'

export function WhatWeDo() {

    const firstCircle = useRef<HTMLDivElement>(null)
    const secondCircle = useRef<HTMLDivElement>(null)
    const thirdCircle = useRef<HTMLDivElement>(null)
    const fourthCircle = useRef<HTMLDivElement>(null)

    const handleMouseInteraction = (elementIndex: number, isMouseEnter: boolean) => {
        const circles = [firstCircle, secondCircle, thirdCircle, fourthCircle].slice(0, elementIndex);

        for (const circle of circles) {
            if (circle.current) {
                const method = isMouseEnter ? 'add' : 'remove';
                circle.current.classList[method](styles.activeStep);
            }
        }
    };

    const handleMouseEnter = (elementIndex: number) => {
        handleMouseInteraction(elementIndex, true);
    };

    const handleMouseLeave = (elementIndex: number) => {
        handleMouseInteraction(elementIndex, false);
    };

    return (
        <div className={`${styles.contentWrapper} container`} id='whatwedo'>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}>WHAT WE DO</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.whatWeDoStepsWrapper}>
                <div
                    className={styles.step}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <div
                        className={styles.circle}
                        ref={firstCircle}
                    >
                        <div className={styles.logoWrapper}>
                            <Image src={keyword} width={65} height={65} alt="what we do logo" />
                        </div>
                    </div>
                </div>
                <div
                    className={styles.step}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}>
                    <div
                        className={styles.circle}
                        ref={secondCircle}
                    >
                        <div className={styles.logoWrapper}>
                            <Image src={webdesign} width={65} height={65} alt="what we do logo" />
                        </div>
                    </div>
                </div>
                <div
                    className={styles.step}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <div
                        className={styles.circle}
                        ref={thirdCircle}
                    >
                        <div className={styles.logoWrapper}>
                            <Image src={deploymant} width={65} height={65} alt="what we do logo" />
                        </div>
                    </div>

                </div>
                <div
                    className={styles.step}
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={() => handleMouseLeave(4)}
                >
                    <div
                        ref={fourthCircle}
                        className={styles.circle}
                    >
                        <div className={styles.logoWrapper}>
                            <Image src={coding} width={65} height={65} alt="what we do logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.textContentWrapper}>
                <div className={styles.contentDiv}>
                    <h2 className={styles.title}><span className={styles.selectedWordInTitle}>01/ </span>Discover</h2>
                    <p className={styles.content}>We do requirement analysis for each project. We identify the current problems by getting input from customers, salespeople, industry experts and programmers.</p>
                </div>
                <div className={styles.contentDiv}>
                    <h2 className={styles.title}><span className={styles.selectedWordInTitle}>02/ </span>Design</h2>
                    <p className={styles.content}>We plan and design what we want and how we will get it done. Here we turn the software specifications into a design plan: Design Specification.</p>
                </div>
                <div className={styles.contentDiv}>
                    <h2 className={styles.title}><span className={styles.selectedWordInTitle}>03/ </span>Develop</h2>
                    <p className={styles.content}>We create what we want. In this stage our developers stick to the agreed blueprint and follow our guidelines about the code style and practices.</p>
                </div>
                <div className={styles.contentDiv}>
                    <h2 className={styles.title}><span className={styles.selectedWordInTitle}>04/ </span>Deploy</h2>
                    <p className={styles.content}>We deploy the software to the production environment. However, many of our customers request to move the product through different deployment environments: testing, staging.</p>
                </div>
            </div>
        </div >
    )
}