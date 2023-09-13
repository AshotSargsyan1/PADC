import Image from 'next/image'

import googleFakeMap from '../../assets/map.png'
import styles from './contact.module.css'

export function Contact() {
    return (
        <div className={`${styles.contentWrapper} container`}>
            <div>
                <h2 className={styles.title}>CONTACT US</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.contactAndMapWrapper}>
                <div className={styles.contactAndMapSubWrapper}>
                    <div className={styles.contactWrapper}>
                        <div className={styles.contactInfoFields}>
                            <strong className={styles.contactInfoField}>ADDRESS:</strong>
                            <strong className={styles.contactInfoField}>PHONE:</strong>
                            <strong className={styles.contactInfoField}>E-mail:</strong>
                        </div>
                        <div className={styles.contactInfoDiv}>
                            <p className={styles.contactInfo}>Mher Mkrtchyan 47/1 3101 Gyumri, Armenia</p>
                            <a className={styles.contactInfo} href="tel:+(374)94 019 941">+(374)94 019 941</a>
                            <a className={styles.contactInfo} href="mailto:contact@padcllc.com">contact@padcllc.com</a>
                        </div>
                    </div>
                    <div className={styles.enterNumberDiv}>
                        <h6 className={styles.titleForNumber}>Write your number</h6>
                        <p className={styles.subTextForNumber}>We will call you</p>
                        <input type="text" className={styles.inputForNumber} />
                        <button className={styles.buttonForSendNumber}>Send</button>
                    </div>
                </div>
                <div className={styles.contactAndMapSubWrapper}>
                    <div className={styles.mapouter}>
                        <div className={styles.gmap_canvas}>
                            <iframe className={styles.gmap_iframe} src="https://maps.google.com/maps?width=600&amp;height=620&amp;hl=en&amp;q=40.798928, 43.843152&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            <a href="https://embed-googlemap.com">embed code google maps</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
