import { css } from "@/styled-system/css";

export const track = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '5px',
    borderRadius: '10px',
    transition: 'background-color .3s ease',
    cursor: 'pointer',
    marginLeft: '-5px',
    marginRight: '-5px',
    '&:hover': {
        backgroundColor: 'border',
    }
});

export const trackCover = css({
    aspectRatio: '1 / 1',
    width: '50px',
    borderRadius: '5px',
});

export const metadata = css({

});