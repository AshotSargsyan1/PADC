"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';

import styles from './header.module.css'
import { SwipeableDrawer } from '@mui/material';
import { usePathname } from 'next/navigation';


export default function Header() {

    const [currentHash, setCurrentHash] = useState<string>('/');
    const [showFixedHidden, setShowFixedHidden] = useState<boolean>(false)

    const [state, setState] = useState({
        right: false,
    });

    function allLinks() {
        return (
            <>
                <Link onClick={() => { setCurrentHash('/') }} href='/' className={`${styles.navText}  ${currentHash === '/' ? styles.activeTab : undefined}`}>HOME</Link>
                <Link onClick={() => { setCurrentHash('/#projects') }} href='/#projects' className={`${styles.navText}  ${currentHash === '/#projects' ? styles.activeTab : undefined}`}>PROJECTS</Link>
                <Link onClick={() => { setCurrentHash('/#whatwedo') }} href='/#whatwedo' className={`${styles.navText}  ${currentHash === '/#whatwedo' ? styles.activeTab : undefined}`}>WHAT WE DO</Link>
                <Link onClick={() => { setCurrentHash('/#services') }} href='/#services' className={`${styles.navText}  ${currentHash === '/#services' ? styles.activeTab : undefined}`}>SERVICES</Link>
                <Link onClick={() => { setCurrentHash('/#partners') }} href='/#partners' className={`${styles.navText}  ${currentHash === '/#partners' ? styles.activeTab : undefined}`}>PARTNERS</Link>
                <Link onClick={() => { setCurrentHash('/#team') }} href='/#team' className={`${styles.navText}  ${currentHash === '/#team' ? styles.activeTab : undefined}`}>TEAM</Link>
                <Link onClick={() => { setCurrentHash('/#contact') }} href='/#contact' className={`${styles.navText}  ${currentHash === '/#contact' ? styles.activeTab : undefined}`}>CONTACT</Link>
                <Link onClick={() => { setCurrentHash('/trainings') }} href='/trainings' className={`${styles.navText}  ${currentHash === '/trainings' ? styles.activeTab : undefined}`}>TRAININGS</Link>
                <Link onClick={() => { setCurrentHash('/career') }} href='/career' className={`${styles.navText}  ${currentHash === '/career' ? styles.activeTab : undefined}`}>CAREER</Link>
            </>
        )
    }

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
                        {allLinks()}
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
                                        <div>
                                            {allLinks()}
                                        </div>
                                    </SwipeableDrawer>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}