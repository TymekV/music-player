'use client'
import { Poppins } from 'next/font/google';
import "./globals.css";
import Head from 'next/head';
import NowPlayingProvider from '@/lib/providers/NowPlayingProvider';
import Player from '@/lib/components/Player';
import PlaybackStateProvider from '@/lib/providers/PlaybackStateProvider';
import LibraryProvider from '@/lib/providers/LibraryProvider';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

// export const metadata: Metadata = {
//     title: 'Music Player',
//     description: 'A simple music player app built with Next.js',
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <body className={poppins.variable}>
                <LibraryProvider>
                    <NowPlayingProvider>
                        <PlaybackStateProvider>
                            {children}
                            <Player />
                        </PlaybackStateProvider>
                    </NowPlayingProvider>
                </LibraryProvider>
            </body>
        </html>
    );
}