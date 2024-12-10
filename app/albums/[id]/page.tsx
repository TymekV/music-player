'use client';

import { useNowPlaying } from "@/lib/providers/NowPlayingProvider";
import { useLibrary } from "@/lib/providers/LibraryProvider";
import Container from "@/lib/components/Container";
import Title from "@/lib/components/Title";
import { css } from "@/styled-system/css";
import { IconDisc } from "@tabler/icons-react";
import Track from "@/lib/components/Track";
import { use, useMemo } from "react";
import Subtitle from "@/lib/components/Subtitle";
import InlineTrack from "@/lib/components/InlineTrack";

export default function Album({ params }: { params: Promise<{ id: number }> }) {
    const { albums, library } = useLibrary();

    const [nowPlaying, setNowPlaying] = useNowPlaying();

    const { id } = use(params);

    const album = useMemo(() => albums[id] ?? {}, [albums, id]);

    const albumTracks = useMemo(() => library.filter(x => x.album == album.title), [library, album]);

    return (
        <Container>
            <div className={header}>
                <div className={coverContainer}>
                    <img src={`/media/covers/${album.cover}`} className={cover} />
                </div>
                <Title size="xl">{album.title}</Title>
                <Subtitle size="md">{album.artist}</Subtitle>
            </div>
            <img src={`/media/covers/${album.cover}`} className={blur} />
            <div className={tracks}>
                {albumTracks.map((t, i) => <InlineTrack key={i} {...t} onClick={() => setNowPlaying(t)} />)}
            </div>
        </Container>
    );
}

const header = css({
    marginTop: '10px',
    display: 'flex',
    flexDir: 'column',
    gap: '3px',
});


const blur = css({
    position: 'absolute',
    left: '0px',
    top: '-150px',
    width: '700px',
    height: '600px',
    // background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);',
    zIndex: -1,
    filter: 'blur(100px) brightness(.3)',
    borderRadius: '99999999px'
});

const tracks = css({
    marginTop: '15px'
});

const coverContainer = css({
    borderRadius: '12px',
    borderWidth: '1px',
    borderColor: 'border',
    overflow: 'hidden',
    width: '100px',
    marginBottom: '7px'
});

const cover = css({
    aspectRatio: '1 / 1',
    width: 'auto',
});