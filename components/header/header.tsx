"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import padcLogo from '../../assets/padc_logo.svg'
import styles from './header.module.css'

export default function Header() {

    const [showFixedHidden, setShowFixedHidden] = useState<boolean>(false)

    const handleScroll = () => {
        if(window.scrollY >= 500) {
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
                        <nav className={styles.nav}>
                            <Link href='/' className={styles.navText}>HOME</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='/#projects' className={styles.navText}>PROJECTS</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='/#whatwedo' className={styles.navText}>WHAT WE DO</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='/#services' className={styles.navText}>SERVICES</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='/#partners' className={styles.navText}>PARTNERS</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='/#team' className={styles.navText}>TEAM</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='/#contact' className={styles.navText}>CONTACT</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='/trainings' className={styles.navText}>TRAININGS</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='/career' className={styles.navText}>CAREER</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}