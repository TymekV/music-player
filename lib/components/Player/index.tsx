import { useNowPlaying } from "@/lib/providers/NowPlayingProvider";
import { container, cover, left, metadata, containerBody } from "./styles";
import Title from "../Title";
import Subtitle from "../Subtitle";

export default function Player() {
    const [nowPlaying] = useNowPlaying();

    return (
        <div className={container}>
            <div className={containerBody}>
                <div className={left}>
                    <img
                        src={nowPlaying.cover}
                        className={cover}
                    />
                    <div className={metadata}>
                        <Title size="md" weight={600}>{nowPlaying.title}</Title>
                        <Subtitle size="sm">{nowPlaying.artist}</Subtitle>
                    </div>
                </div>
            </div>
        </div>
    )
}