'use client';
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNowPlaying } from "./NowPlayingProvider";

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

    const audioRef = useRef<HTMLAudioElement>(null);

    const [nowPlaying] = useNowPlaying();

    useEffect(() => {
        const path = `/media/${nowPlaying.path}`;

        if (!audioRef.current) audioRef.current = new Audio(path);
        else audioRef.current.src = path;

        try {
            audioRef.current.play();
        } catch (error) {

        }

        const timeInterval = setInterval(() => {
            setPlaybackState(x => ({ ...x, currentTime: audioRef.current?.currentTime ?? 0, duration: audioRef.current?.duration ?? 0 }));
        }, 500);

        const onPlay = () => {
            setPlaybackState(x => ({ ...x, paused: false }));
        }

        const onPause = () => {
            setPlaybackState(x => ({ ...x, paused: true }));
        }

        audioRef.current.addEventListener('play', onPlay);
        audioRef.current.addEventListener('pause', onPause);

        return () => {
            clearInterval(timeInterval);

            if (audioRef.current) {
                audioRef.current.removeEventListener('play', onPlay);
                audioRef.current.removeEventListener('pause', onPause);
            }
        }
    }, [nowPlaying]);

    useEffect(() => {
        if (!audioRef.current) return;

        if (playbackState.paused) audioRef.current.pause();
        else audioRef.current.play();
    }, [playbackState.paused]);

    return (
        <PlaybackStateContext.Provider value={[playbackState, setPlaybackState]}>
            {children}
        </PlaybackStateContext.Provider>
    )
}

export function usePlaybackState() {
    return useContext(PlaybackStateContext);
}