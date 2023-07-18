import styles from './Page-Home.module.scss';
import React from 'react';

const siteURL = 'https://localhost:3000';

// rendering params
export const revalidate = 'force-cache'; // Reduce CLS to 0
export const dynamicParams = true; // true | false for query params url

interface Props {
    params: {
        lang: string;
    };
}

// METADATA
export function generateMetadata({ params }: Props) {
    return {
        title: `Home Page | Food in ${params.lang ?? 'English'}`,
        alternates: {
            canonical: `${siteURL}/`
        }
    };
}

// RENDERING
export default async function Page({ searchParams }: any) {
    // url page from middleware
    const { country, city, lang } = searchParams; // region available

    const TITLE = 'Hello {LANG} user from {CITY}, {COUNTRY}';
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1>
                        {TITLE.replace(
                            '{LANG}',
                            lang.replace('en', 'English').replace('fr', 'Français')
                        )
                            .replace('{CITY}', city)
                            .replace('{COUNTRY}', country)}
                    </h1>

                    <p>We bought all food and these are our best.</p>
                </div>
                <div className={styles.navigation}>Get More Information</div>
            </div>
        </>
    );
}
