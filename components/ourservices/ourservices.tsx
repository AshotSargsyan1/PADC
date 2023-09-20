import styles from './ourservices.module.css'

export function OurServices() {

    return (
        <div className={`${styles.contentWrapper} container`} id='services'>
            <div>
                <h2 className={styles.title}>OUR SERVICES</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.ourServicesWrapper}>
                <div className={styles.servicesSubDiv}>
                    <div className={styles.firstService}>
                        <div className={styles.serviceMainTitleDiv}>
                            <h3 className={styles.servicesMainTitle}>Web</h3>
                        </div>
                        <div className={styles.allServiceWrapper}>
                            <div className={styles.serviceMainContent}>
                                <h5 className={styles.titlesForServices}>Frontend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>Angular 2+</div>
                                    <div className={styles.divForServices}>React Js</div>
                                    <div className={styles.divForServices}>HTML5/CSS3</div>
                                </div>
                                <h5 className={styles.titlesForServices}>Backend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>PYTHON</div>
                                    <div className={styles.divForServices}>Django</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondService}>
                        <div>
                            <h3 className={styles.servicesMainTitle}>Gaming</h3>
                        </div>
                        <div className={styles.allServiceWrapper}>
                            <div className={styles.serviceMainContent}>
                                <h5 className={styles.titlesForServices}>Frontend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>Angular 2+</div>
                                    <div className={styles.divForServices}>React Js</div>
                                    <div className={styles.divForServices}>HTML5/CSS3</div>
                                </div>

                                <h5 className={styles.titlesForServices}>Backend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>PYTHON</div>
                                    <div className={styles.divForServices}>Django</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesSubDiv}>
                    <div className={styles.thirdService}>
                        <div>
                            <h3 className={styles.servicesMainTitle}>Mobile</h3>
                        </div>
                        <div className={styles.allServiceWrapper}>
                            <div className={styles.serviceMainContent}>
                                <h5 className={styles.titlesForServices}>Frontend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>Angular 2+</div>
                                    <div className={styles.divForServices}>React Js</div>
                                    <div className={styles.divForServices}>HTML5/CSS3</div>
                                </div>
                                <h5 className={styles.titlesForServices}>Backend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>PYTHON</div>
                                    <div className={styles.divForServices}>Django</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.fourthService}>
                        <div>
                            <h3 className={styles.servicesMainTitle}>UI/UX</h3>
                        </div>
                        <div className={styles.allServiceWrapper}>
                            <div className={styles.serviceMainContent}>
                                <h5 className={styles.titlesForServices}>Frontend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>Angular 2+</div>
                                    <div className={styles.divForServices}>React Js</div>
                                    <div className={styles.divForServices}>HTML5/CSS3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesSubDiv}>
                    <div className={styles.fifthService}>
                        <div>
                            <h3 className={styles.servicesMainTitle}>DevOps</h3>
                        </div>
                        <div className={styles.allServiceWrapper}>
                            <div className={styles.serviceMainContent}>
                                <h5 className={styles.titlesForServices}>Frontend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>Angular 2+</div>
                                    <div className={styles.divForServices}>React Js</div>
                                    <div className={styles.divForServices}>HTML5/CSS3</div>
                                </div>
                                <h5 className={styles.titlesForServices}>Backend</h5>
                                <div className={styles.divForServicesWrapper}>
                                    <div className={styles.divForServices}>PYTHON</div>
                                    <div className={styles.divForServices}>Django</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}