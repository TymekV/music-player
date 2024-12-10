import React from "react";
import { coverContainer, coverOverlay, metadata, track, trackCover } from "./styles";
import Title from "../Title";
import Subtitle from "../Subtitle";
import PlayerButton from "../PlayerButton";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

export interface TrackProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    artist: string,
    cover: string,
}

export default function Track({ title, artist, cover, ...props }: TrackProps) {
    return (
        <div className={track} {...props}>
            <div className={coverContainer}>
                <img className={trackCover} src={`/media/covers/${cover}`} />
                <div className={coverOverlay} data-overlay>
                    <PlayerButton size="xl" icon={IconPlayerPlayFilled} primary />
                </div>
            </div>
            <div className={metadata}>
                <Title size="xs">{title}</Title>
                <Subtitle size="xs">{artist}</Subtitle>
            </div>
        </div>
    )
}