import '@styles/global.css';

import type { Metadata } from 'next';
import React from 'react';

// SSR
import { roboto } from './fonts';
import Header from '@components/_partials/header';

// https://beta.nextjs.org/docs/api-reference/segment-config

export const metadata: Metadata = {
    title: {
        default: 'localhost | Home Page | localhost',
        template: ' %s | localhost | Clocalhost'
    },
    openGraph: {
        url: 'https://localhost.com',
        title: 'localhost | Home Page | Clocalhost',
        description: 'localhost Previews is your source for local.',
        siteName: 'localhost Previews',
        images: [
            {
                url: 'https://localhost.com/favicon.ico'
            }
        ]
    },
    generator: 'localhost',
    applicationName: 'localhost',
    twitter: {
        card: 'summary_large_image',
        title: 'localhost Previews | localhost  | Online Browsing',
        description: 'localhost Previews | Home Page | Clocalhost',
        creator: '@localhost',
        images: ['https://localhost.com/favicon.ico']
    },
    icons: {
        icon: 'https://localhost.com/favicon.ico',
        shortcut: 'https://localhost.com/favicon.ico',
        apple: 'https://localhost.com/favicon.ico'
    },
    keywords: 'internet',
    description: 'blazing flast'
};

export async function generateStaticParams() {
    return [{ lang: 'en-US' }, { lang: 'en' }];
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: any;
}) {
    return (
        <html lang={params.lang || 'en'}>
            <head>
                <meta name="theme-color" content="#fff" />
            </head>
            <body className={roboto.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
