import { css } from "@/styled-system/css";

export const track = css({
    // width: '250px',
    width: 'auto',
    cursor: 'pointer',
    '&:hover': {
        '& [data-overlay]': {
            opacity: 1,
        }
    }
});

export const coverContainer = css({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px',
    borderWidth: '1px',
    borderColor: 'border',
});

export const trackCover = css({
    aspectRatio: '1 / 1',
    width: 'auto',
    borderRadius: '15px',
});

export const metadata = css({
    marginTop: '10px',
});

export const coverOverlay = css({
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    backgroundColor: '#00000050',
    transition: 'opacity .5s ease',
    opacity: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});