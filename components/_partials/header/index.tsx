'use client';

import styles from '@styles/scss/layout/Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

    const pathname = usePathname();

    const closeHamburger = () => {
        setIsNavExpanded(false);
    };

    useEffect(() => {
        closeHamburger();
    }, [pathname]);

    // https://beta.nextjs.org/docs/api-reference/use-router

    return (
        <>
            <header className={styles.navigation}>
                <div className={styles.content}>
                    <Link href="/" className={styles.title}>
                        LOGO
                    </Link>
                    <button
                        name="burger"
                        aria-label="burger"
                        className={styles.hamburger}
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}
                    >
                        {/* icon Burger */}
                        <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </button>
                    <nav
                        className={
                            isNavExpanded
                                ? `${styles.navigation_menu} ${styles.expanded}`
                                : `${styles.navigation_menu}`
                        }
                    >
                        <ul>
                            {isNavExpanded ? (
                                <li>
                                    <Link
                                        href="/"
                                        onClick={() => {
                                            closeHamburger();
                                        }}
                                        className={styles.title}
                                    >
                                        Link 1
                                    </Link>
                                </li>
                            ) : (
                                ''
                            )}

                            <li>
                                <Link
                                    href="/"
                                    onClick={() => {
                                        closeHamburger();
                                    }}
                                    className={styles.title}
                                >
                                    Link 2
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/"
                                    onClick={() => {
                                        closeHamburger();
                                    }}
                                    className={styles.title}
                                >
                                    Link 3
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/"
                                    onClick={() => {
                                        closeHamburger();
                                    }}
                                    className={styles.title}
                                >
                                    Link 4
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
