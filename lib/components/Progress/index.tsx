import { usePlaybackState } from "@/lib/providers/PlaybackStateProvider";
import { mainContainer, progress, progressContainer } from "./styles";
import Subtitle from "../Subtitle";
import formatTime from "@/lib/util/formatTime";

export default function Progress() {
    const [state] = usePlaybackState();

    return (
        <div className={mainContainer}>
            <Subtitle size="xs">{formatTime(state.currentTime)}</Subtitle>
            <div className={progressContainer}>
                <div className={progress} style={{ width: `${(state.currentTime / state.duration) * 100}%` }}></div>
            </div>
            <Subtitle size="xs">{formatTime(state.duration)}</Subtitle>
        </div>
    )
}