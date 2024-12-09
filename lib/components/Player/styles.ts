import { css } from "@/styled-system/css";

export const container = css({
    position: 'fixed',
    left: '0px',
    right: '0px',
    bottom: '0px',
    height: '100px',
    borderTopWidth: '1px',
    borderTopColor: 'border',
    backgroundColor: 'tile.0',
    display: 'flex',
});

export const containerBody = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    flex: 1,
    position: 'relative',
});

export const left = css({
    display: 'flex',
    alignItems: 'center',
});

export const metadata = css({
    gap: '3px',
});

export const cover = css({
    width: '60px',
    height: '60px',
    borderRadius: '5px',
    borderWidth: '1px',
    borderColor: 'border',
    marginRight: '15px'
});

export const center = css({
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDir: 'column',
});

export const controls = css({
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
});