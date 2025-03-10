'use client';
import { createContext, useContext, useState } from "react";

export type NowPlayingType = {
    title: string;
    artist: string;
    cover: string;
    path: string;
    album: string;
    isEmpty?: boolean;
};

export type NowPlayingContextType = [
    NowPlayingType,
    React.Dispatch<React.SetStateAction<NowPlayingType>>,
];

const initialNowPlaying: NowPlayingType = {
    title: '',
    artist: '',
    cover: '',
    path: '',
    album: '',
    isEmpty: true,
}

export const NowPlayingContext = createContext<NowPlayingContextType>([
    initialNowPlaying,
    () => { },
]);

export default function NowPlayingProvider({ children }: { children: React.ReactNode }) {
    const [nowPlaying, setNowPlaying] = useState<NowPlayingType>(initialNowPlaying);

    return (
        <NowPlayingContext.Provider value={[nowPlaying, setNowPlaying]}>
            {children}
        </NowPlayingContext.Provider>
    )
}

export function useNowPlaying() {
    return useContext(NowPlayingContext);
}