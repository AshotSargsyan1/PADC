"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from '@mui/material';

import styles from './header.module.css'
import { useHashs } from '@/store/store';

export default function Header() {

    const [currentHash, setCurrentHash] = useState<string>(`${window.location.pathname !== '/'}` ? `${window.location.pathname}` : `/${window.location.hash}`);

    const [showFixedHidden, setShowFixedHidden] = useState<boolean>(false)
    const activeLink = useHashs(state => state.activeLink)
    const setActiveLink = useHashs(state => state.addLinkHash)

    const [state, setState] = useState({
        right: false,
    });
    
    useEffect(() => {
        setCurrentHash(activeLink)
    }, [activeLink])

    const navItems = [
        { hash: '/', text: 'HOME' },
        { hash: '/#projects', text: 'PROJECTS' },
        { hash: '/#whatwedo', text: 'WHAT WE DO' },
        { hash: '/#services', text: 'SERVICES' },
        { hash: '/#partners', text: 'PARTNERS' },
        { hash: '/#team', text: 'TEAM' },
        { hash: '/#contact', text: 'CONTACT' },
        { hash: '/trainings', text: 'TRAININGS' },
        { hash: '/career', text: 'CAREER' }
    ];

    const allLinks = () => {
        return navItems.map(item => (
            <Link
                key={item.text}
                onClick={() => setActiveLink(item.hash)}
                href={item.hash}
                className={`${styles.navText} ${currentHash === item.hash ? styles.activeTab : undefined}`
                }
            >
                {item.text}
            </Link >
        ));
    };

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