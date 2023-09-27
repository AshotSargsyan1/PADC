"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';

import styles from './header.module.css'
import { SwipeableDrawer } from '@mui/material';


export default function Header() {

    const [showFixedHidden, setShowFixedHidden] = useState<boolean>(false)

    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor: 'right', open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const handleScroll = (): void => {
        if (window.scrollY > 500) {
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
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}assets/images/padc-logo.svg`} width={175} height={60} alt='PADC logo' priority />
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
                    <div className={styles.burger}>
                        <div>
                            {(['right'] as const).map((anchor) => (
                                <div key={anchor}>
                                    <MenuIcon fontSize='large' onClick={toggleDrawer(anchor, true)} />
                                    <SwipeableDrawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                        onOpen={toggleDrawer(anchor, true)}
                                    >
                                        <Link href='/' className={styles.navText}>HOME</Link>
                                        <Link href='/#projects' className={styles.navText}>PROJECTS</Link>
                                        <Link href='/#whatwedo' className={styles.navText}>WHAT WE DO</Link>
                                        <Link href='/#services' className={styles.navText}>SERVICES</Link>
                                        <Link href='/#partners' className={styles.navText}>PARTNERS</Link>
                                        <Link href='/#team' className={styles.navText}>TEAM</Link>
                                        <Link href='/#contact' className={styles.navText}>CONTACT</Link>
                                        <Link href='/trainings' className={styles.navText}>TRAININGS</Link>
                                        <Link href='/career' className={styles.navText}>CAREER</Link>
                                    </SwipeableDrawer>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}