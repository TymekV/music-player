'use client';

import { useNowPlaying } from "@/lib/providers/NowPlayingProvider";
import { useLibrary } from "@/lib/providers/LibraryProvider";
import Container from "@/lib/components/Container";
import Title from "@/lib/components/Title";
import { css } from "@/styled-system/css";
import { IconDisc } from "@tabler/icons-react";
import Track from "@/lib/components/Track";
import Link from "next/link";

export default function Albums() {
    const { albums } = useLibrary();

    return (
        <Container>
            <div className={header}>
                <IconDisc size={35} style={{ marginBottom: '7px' }} />
                <Title size="xl">Albums</Title>
            </div>
            <div className={tracks}>
                {albums.map((t, i) => <Link key={i} href={`/albums/${i}`}>
                    <Track {...t} />
                </Link>)}
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

const tracks = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '15px',
    rowGap: '15px',
    marginTop: '15px'
});