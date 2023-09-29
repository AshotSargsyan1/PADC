"use client"
import Image from 'next/image'
import Link from 'next/link'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import styles from './footer.module.css'
import { useHashs } from '@/store/store'

export function Footer() {

    const setActiveLink = useHashs(state => state.addLinkHash)

    return (
        <footer className={`${styles.footer} container`}>
            <div className={`${styles.logoAndLinksWrapper} container`}>
                <div className={styles.logoDiv}>
                    <div className={styles.padcLogoDiv}>
                        <Link href='/'>
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}assets/images/padc-logo.svg`} height={60} width={176} alt='padc footer logo' />
                        </Link>
                    </div>
                    <div className={styles.logosWrapper}>
                        <div className={styles.logoWrapper}>
                            <Link target='_blank' href='https://www.facebook.com/padc.ltd/'>
                                <Image src={facebook} alt='facebook' />
                            </Link>
                        </div>
                        <div className={styles.logoWrapper}>
                            <Link target='_blank' href='https://www.instagram.com/padc.llc/'>
                                <Image src={instagram} alt='instagram' />
                            </Link>
                        </div>
                        <div className={styles.logoWrapper}>
                            <Link target='_blank' href='https://twitter.com/PADCLLC'>
                                <Image src={twitter} alt='twitter' />
                            </Link>
                        </div>
                        <div className={styles.logoWrapper}>
                            <Link target='_blank' href='https://www.linkedin.com/company/padc-llc/'>
                                <Image src={linkedin} alt='linkedin' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.navigationDiv}>
                    <div className={styles.navigateLines}>
                        <Link className={styles.link} href='/'>Home</Link>
                        <Link className={styles.link} onClick={() => {
                            setActiveLink('/#projects')
                        }} href='/#projects'>Projects</Link>
                        <Link className={styles.link} onClick={() => {
                            setActiveLink('/#whatwedo')
                        }} href='/#whatwedo'>What we do</Link>
                        <Link className={styles.link} onClick={() => {
                            setActiveLink('/#partners')
                        }} href='#partners'>Partners</Link>
                    </div>
                    <div className={styles.navigateLines}>
                        <Link className={styles.link} onClick={() => {
                            setActiveLink('/#contact')
                        }} href='/#contact'>Contact</Link>
                    </div>
                </div>
            </div>
            <div className={styles.allRightsDiv}>
                <h6 className={styles.allRightsTitle}>© {new Date().getFullYear()} PADC LLC All Rights Reserved</h6>
            </div>
        </footer>
    )
}




