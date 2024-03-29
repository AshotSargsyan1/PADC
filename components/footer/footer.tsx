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
                            <Image src={padcLogo} height={90} width={270} alt='padc footer logo' />
                        </div>
                        <div className={styles.logosWrapper}>
                            <div className={styles.logoWrapper}>
                                <Image src={facebook} alt='facebook'/>
                            </div>
                            <div className={styles.logoWrapper}>
                                <Image src={instagram} alt='instagram' />
                            </div>
                            <div className={styles.logoWrapper}>
                                <Image src={twitter} alt='twitter' />
                            </div>
                            <div className={styles.logoWrapper}>
                                <Image src={linkedin} alt='linkedin' />
                            </div>
                            <div className={styles.logoWrapper}>
                                <Image src={google} alt='google' />
                            </div>
                        </div>
                </div>
                <div className={styles.navigationDiv}>
                    <div className={styles.navigateLines}>
                        <Link className={styles.link} href='#'>Home</Link>
                        <Link className={styles.link} href='#'>Our projects</Link>
                        <Link className={styles.link} href='#'>What we do</Link>
                        <Link className={styles.link} href='#'>Our partners</Link>
                    </div>
                    <div className={styles.navigateLines}>
                        <Link className={styles.link} href='#'>Send request</Link>
                        <Link className={styles.link} href='#'>Contact us</Link>
                        <Link className={styles.link} href='#'>Send your number</Link>
                    </div>
                </div>
            </div>
            <div className={styles.allRightsDiv}>
                <h6 className={styles.allRightsTitle}>© 2020 PADC LLC All Rights Reserved</h6>
            </div>
        </footer>
    )
}




