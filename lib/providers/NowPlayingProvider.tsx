'use client';
import { createContext, useContext, useState } from "react";

export type NowPlayingType = {
    title: string;
    artist: string;
    cover: string;
};

export type NowPlayingContextType = [
    NowPlayingType,
    React.Dispatch<React.SetStateAction<NowPlayingType>>,
];

const initialNowPlaying: NowPlayingType = {
    title: 'LosT',
    artist: 'Bring Me The Horizon',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApqe5pWAozxnwWCfHkZ6-LKgQqXKrYdkK2w&s',
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