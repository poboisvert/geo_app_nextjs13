import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const { nextUrl: url, geo } = req;

    // lang rules and supported
    let locales = ['en', 'fr', 'ru'];
    // get client language
    const acceptLanguage = req.headers.get('accept-language');
    const [languages] = acceptLanguage?.split(';') || ['?', '?']; // from header client
    const preferredLanguageAll = languages.split(',')[0];
    const preferredLanguageOne = preferredLanguageAll.split('-')[0];

    if (locales.includes(preferredLanguageOne)) {
        url.searchParams.set('lang', preferredLanguageOne);
    } else {
        url.searchParams.set('lang', 'en');
    }

    // geo code
    const country = geo?.country ?? 'US';
    const city = geo?.city ?? 'San Francisco';
    const region = geo?.region ?? 'CA';

    url.searchParams.set('country', country);
    url.searchParams.set('region', region);
    url.searchParams.set('city', city);
    // console.log('_middleware:', url.toString());

    return NextResponse.rewrite(url);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)'
        // Optional: only run on root (/) URL
        // '/'
    ]
};
