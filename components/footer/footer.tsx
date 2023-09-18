import Image from 'next/image'
import Link from 'next/link'

import padcLogo from '../../assets/padc_logo.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import google from '../../assets/google.svg'
import styles from './footer.module.css'

export function Footer() {
    return (
        <footer className={`${styles.footer} container`}>
            <div className={`${styles.logoAndLinksWrapper} container`}>
                <div className={styles.logoDiv}>
                    <div className={styles.padcLogoDiv}>
                        <Link href='/'>
                            <Image src={padcLogo} height={60} width={176} alt='padc footer logo' />
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
                        <Link className={styles.link} href='/#projects'>Projects</Link>
                        <Link className={styles.link} href='/#whatwedo'>What we do</Link>
                        <Link className={styles.link} href='#partners'>Partners</Link>
                    </div>
                    <div className={styles.navigateLines}>
                        <Link className={styles.link} href='/#contact'>Contact</Link>
                    </div>
                </div>
            </div>
            <div className={styles.allRightsDiv}>
                <h6 className={styles.allRightsTitle}>© 2023 PADC LLC All Rights Reserved</h6>
            </div>
        </footer>
    )
}




