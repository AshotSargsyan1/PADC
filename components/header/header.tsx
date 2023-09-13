import Image from 'next/image'
import Link from 'next/link'

import padcLogo from '../../assets/padc_logo.svg'
import styles from './header.module.css'

export default async function Header() {

    return (
        <header className={styles.header}>
            <div className={`${styles.subHeader} container`}>
                <div className={styles.logoAndNavigateWrapper}>
                    <div>
                        <Image src={padcLogo} width={205} height={70} alt='PADC logo' />
                    </div>
                    <div className={styles.navigate}>
                        <nav className={styles.nav}>
                            <Link href='#' className={styles.navText}>HOME</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='#' className={styles.navText}>OUR PROJECTS</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='#' className={styles.navText}>WHAT WE DO</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='#' className={styles.navText}>OUR SERVICES</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='#' className={styles.navText}>PARTNERS</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='#' className={styles.navText}>OUR TEAM</Link>
                        </nav>
                        <nav className={styles.nav}>
                            <Link href='#' className={styles.navText}>CONTACTS</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}