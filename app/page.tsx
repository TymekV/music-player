'use client';

import { useNowPlaying } from "@/lib/providers/NowPlayingProvider";
import { useLibrary } from "@/lib/providers/LibraryProvider";

export default function Home() {
    const library = useLibrary();

    const [nowPlaying, setNowPlaying] = useNowPlaying();

    return (
        <div>
            <div onClick={() => {
                setNowPlaying(library[0]);
            }}>PLAY</div>
        </div>
    );
}
