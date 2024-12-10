'use client';

import { useNowPlaying } from "@/lib/providers/NowPlayingProvider";
import { useLibrary } from "@/lib/providers/LibraryProvider";
import Container from "@/lib/components/Container";
import Title from "@/lib/components/Title";
import Subtitle from "@/lib/components/Subtitle";
import { css } from "@/styled-system/css";
import { IconMusic, IconPlayerPlay } from "@tabler/icons-react";
import Track from "@/lib/components/Track";

export default function Home() {
    const { library } = useLibrary();

    const [nowPlaying, setNowPlaying] = useNowPlaying();

    return (
        <Container>
            <div className={header}>
                <IconMusic size={35} style={{ marginBottom: '7px' }} />
                <Title size="xl">Welcome to Music Player!</Title>
                <Subtitle size="md">Ready to dive into your favorite tracks? Explore playlists, discover new beats, and let the music take you away. Start streaming now and make every moment sound amazing!</Subtitle>
            </div>
            <div className={blur}></div>
            {/* <div onClick={() => {
                setNowPlaying(library[0]);
            }}>PLAY</div> */}
            <div className={tracks}>
                {library.map(t => <Track key={t.path} {...t} onClick={() => setNowPlaying(t)} />)}
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
    background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);',
    zIndex: -1,
    filter: 'blur(100px) brightness(.3)',
    borderRadius: '99999999px'
});

const tracks = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '15px',
    rowGap: '15px',
    marginTop: '15px'
});