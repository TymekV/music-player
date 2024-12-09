import { useNowPlaying } from "@/lib/providers/NowPlayingProvider";
import { container } from "./styles";

export default function Player() {
    const [nowPlaying] = useNowPlaying();

    return (
        <div className={container}>

        </div>
    )
}