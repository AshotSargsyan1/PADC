import { ServicesType } from '@/models/enums/services'

import styles from './ourservices.module.css'

export function OurServices() {

    function generateServiceContent(title: ServicesType, withoutBackend?: boolean): JSX.Element {
        return (
            <>
                <div className={styles.serviceMainTitleDiv}>
                    <h3 className={styles.servicesMainTitle}>{title}</h3>
                </div>
                <div className={styles.allServiceWrapper}>
                    <div className={styles.serviceMainContent}>
                        <h5 className={styles.titlesForServices}>Frontend</h5>
                        <div className={styles.divForServicesWrapper}>
                            <div className={styles.divForServices}>Angular 2+</div>
                            <div className={styles.divForServices}>React Js</div>
                            <div className={styles.divForServices}>HTML5/CSS3</div>
                        </div>
                        {!!!withoutBackend &&
                            <>
                                <h5 className={styles.titlesForServices}>Backend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>PYTHON</div>
                                    <div className={styles.divForServices}>Django</div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className={`${styles.contentWrapper} container`} id='services'>
            <div>
                <h2>OUR SERVICES</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.ourServicesWrapper}>
                <div className={styles.servicesSubDiv}>
                    <div className={styles.firstService}>
                        {generateServiceContent(ServicesType.WEB)}
                    </div>
                    <div className={styles.secondService}>
                        {generateServiceContent(ServicesType.GAMING)}
                    </div>
                </div>
                <div className={styles.servicesSubDiv}>
                    <div className={styles.thirdService}>
                        {generateServiceContent(ServicesType.MOBILE)}
                    </div>
                    <div className={styles.fourthService}>
                        {generateServiceContent(ServicesType.UI_UX, true)}
                    </div>
                </div>
                <div className={styles.servicesSubDiv}>
                    <div className={styles.fifthService}>
                        {generateServiceContent(ServicesType.DEVOPS)}
                    </div>
                </div>
            </div>
        </div>
    )
}