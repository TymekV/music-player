'use client';
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LibraryItem = {
    title: string;
    artist: string;
    cover: string;
    path: string;
    album: string;
};

const initialLibrary = {
    library: [],
    albums: [],
}

export type LibraryContextType = {
    library: LibraryItem[],
    albums: LibraryItem[],
}

export const LibraryContext = createContext<LibraryContextType>(initialLibrary);

export default function LibraryProvider({ children }: { children: React.ReactNode }) {
    const [library, setLibrary] = useState<LibraryItem[]>([]);

    const albums = useMemo(() => Object.values(library.reduce<Record<string, LibraryItem>>((acc, item) => {
        if (!acc[item.album]) {
            acc[item.album] = {
                album: item.album,
                cover: item.cover,
                artist: item.artist,
                title: item.album,
                path: '',
            };
        }
        return acc;
    }, {})), [library]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/media/manifest.json');
            setLibrary(res.data.files);
        })();
    }, []);

    return (
        <LibraryContext.Provider value={{ library, albums }}>
            {children}
        </LibraryContext.Provider>
    )
}

export function useLibrary() {
    return useContext(LibraryContext);
}