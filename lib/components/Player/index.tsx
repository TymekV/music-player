import { useNowPlaying } from "@/lib/providers/NowPlayingProvider";
import { container, cover, metadataContainer, metadata } from "./styles";
import Title from "../Title";
import Subtitle from "../Subtitle";

export default function Player() {
    const [nowPlaying] = useNowPlaying();

    return (
        <div className={container}>
            <div className={metadataContainer}>
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
    )
}