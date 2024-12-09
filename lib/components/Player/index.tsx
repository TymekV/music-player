import { useNowPlaying } from "@/lib/providers/NowPlayingProvider";
import { container, cover, left, metadata, containerBody, center, controls } from "./styles";
import Title from "../Title";
import Subtitle from "../Subtitle";
import PlayerButton from "../PlayerButton";
import { IconPlayerPauseFilled, IconPlayerPlayFilled, IconPlayerTrackNextFilled, IconPlayerTrackPrevFilled } from "@tabler/icons-react";
import { usePlaybackState } from "@/lib/providers/PlaybackStateProvider";

export default function Player() {
    const [nowPlaying] = useNowPlaying();
    const [playbackState, setPlaybackState] = usePlaybackState();

    return (
        <div className={container}>
            <div className={containerBody}>
                <div className={left}>
                    {nowPlaying.cover && <img
                        src={`/media/covers/${nowPlaying.cover}`}
                        className={cover}
                    />}
                    <div className={metadata}>
                        <Title size="md" weight={600}>{nowPlaying.title}</Title>
                        <Subtitle size="sm">{nowPlaying.artist}</Subtitle>
                    </div>
                </div>
            </div>
            <div className={center}>
                <div className={controls}>
                    <PlayerButton icon={IconPlayerTrackPrevFilled} size="lg" />
                    <PlayerButton primary icon={playbackState.paused ? IconPlayerPlayFilled : IconPlayerPauseFilled} size="xl" onClick={() => setPlaybackState(x => ({ ...x, paused: !x.paused }))} />
                    <PlayerButton icon={IconPlayerTrackNextFilled} size="lg" />
                </div>
            </div>
        </div>
    )
}