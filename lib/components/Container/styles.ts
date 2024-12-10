import { css, cva } from "@/styled-system/css";

export const container = css({
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '30px',
    width: '100%',
    flex: 1,
    position: 'relative',
});

export const content = cva({
    variants: {
        size: {
            md: {
                width: '1000px',
            }
        }
    }
});