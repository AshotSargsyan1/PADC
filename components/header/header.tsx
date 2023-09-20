"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import padcLogo from '../../assets/padc_logo.svg'
import styles from './header.module.css'

export default function Header() {

    const [showFixedHidden, setShowFixedHidden] = useState<boolean>(false)
    const router = useRouter()

    const handleScroll = (): void => {
        if (window.scrollY >= 500) {
            setShowFixedHidden(true)
        } else {
            setShowFixedHidden(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${showFixedHidden ? styles.scrolledHeader : null}`}>
            <div className={`${styles.subHeader} container`}>
                <div className={styles.logoAndNavigateWrapper}>
                    <div>
                        <Link href='/'>
                            <Image src={padcLogo} width={175} height={60} alt='PADC logo' />
                        </Link>
                    </div>
                    <div className={styles.navigate}>
                        <Link href='/' className={styles.navText}>HOME</Link>
                        <Link href='/#projects' className={styles.navText}>PROJECTS</Link>
                        <Link href='/#whatwedo' className={styles.navText}>WHAT WE DO</Link>
                        <Link href='/#services' className={styles.navText}>SERVICES</Link>
                        <Link href='/#partners' className={styles.navText}>PARTNERS</Link>
                        <Link href='/#team' className={styles.navText}>TEAM</Link>
                        <Link href='/#contact' className={styles.navText}>CONTACT</Link>
                        <Link href='/trainings' className={styles.navText}>TRAININGS</Link>
                        <Link href='/career' className={styles.navText}>CAREER</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}