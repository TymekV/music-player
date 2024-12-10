import React from "react";
import { metadata, track, trackCover } from "./styles";
import Title from "../Title";
import Subtitle from "../Subtitle";
import PlayerButton from "../PlayerButton";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

export interface InlineTrackProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    artist: string,
    cover: string,
}

export default function InlineTrack({ title, artist, cover, ...props }: InlineTrackProps) {
    return (
        <div className={track} {...props}>
            <img className={trackCover} src={`/media/covers/${cover}`} />
            <div className={metadata}>
                <Title size="xs">{title}</Title>
                <Subtitle size="xs">{artist}</Subtitle>
            </div>
        </div>
    )
}