'use client';
import { createContext, useContext, useState } from "react";

export type PlaybackStateType = {
    paused: boolean;
    currentTime: number;
    duration: number;
};

export type PlaybackStateContextType = [
    PlaybackStateType,
    React.Dispatch<React.SetStateAction<PlaybackStateType>>,
];

const initialState: PlaybackStateType = {
    paused: false,
    currentTime: 0,
    duration: 0,
}

export const PlaybackStateContext = createContext<PlaybackStateContextType>([
    initialState,
    () => { },
]);

export default function PlaybackStateProvider({ children }: { children: React.ReactNode }) {
    const [playbackState, setPlaybackState] = useState<PlaybackStateType>(initialState);

    return (
        <PlaybackStateContext.Provider value={[playbackState, setPlaybackState]}>
            {children}
        </PlaybackStateContext.Provider>
    )
}

export function usePlaybackState() {
    return useContext(PlaybackStateContext);
}