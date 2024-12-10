import { cva } from "@/styled-system/css";

export const option = cva({
    base: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '8px',
        padding: '8px 10px',
        cursor: 'pointer',
        transform: 'background-color .3s ease',
    },
    variants: {
        active: {
            true: {
                backgroundColor: 'tile.1',
            }
        }
    }
});