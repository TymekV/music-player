'use client';
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export type LibraryItem = {
    title: string;
    artist: string;
    cover: string;
    path: string;
    album: string;
};

export const LibraryContext = createContext<LibraryItem[]>([]);

export default function LibraryProvider({ children }: { children: React.ReactNode }) {
    const [library, setLibrary] = useState<LibraryItem[]>([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/media/manifest.json');
            setLibrary(res.data.files);
        })();
    }, []);

    return (
        <LibraryContext.Provider value={library}>
            {children}
        </LibraryContext.Provider>
    )
}

export function useLibrary() {
    return useContext(LibraryContext);
}