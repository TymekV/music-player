import { css } from "@/styled-system/css";

export const mainContainer = css({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginTop: '8px'
});

export const progressContainer = css({
    width: '500px',
    height: '4px',
    backgroundColor: 'tile.1',
    borderRadius: '4px',
    position: 'relative',
});

export const progress = css({
    position: 'absolute',
    left: '0px',
    top: '0px',
    bottom: '0px',
    backgroundColor: 'text.0',
    borderRadius: '4px',
});