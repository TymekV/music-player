import { css } from "@/styled-system/css";

export const sidebarContainer = css({
    display: 'flex',
    height: '100%',
    zIndex: 999,
    maxW: '100vw',
});

export const sidebar = css({
    borderRightWidth: '1px',
    borderRightColor: 'border',
    width: '250px',
    minW: '250px',
    height: '100%',
    padding: '25px',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'background'
});

export const sidebarHeader = css({
    display: 'flex',
    flexDir: 'column',
    gap: '2px',
    marginBottom: '15px'
});

export const options = css({
    display: 'flex',
    flexDir: 'column',
    gap: '2px',
})

export const content = css({
    flex: 1,
});