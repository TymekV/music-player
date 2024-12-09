import { cva } from "@/styled-system/css";

export const button = cva({
    base: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'background-color .3s ease, color .3s ease',
        borderRadius: '99999px',
    },
    variants: {
        primary: {
            true: {
                backgroundColor: '#eaeaea',
                color: '#1d1d1d',
                '&:hover': {
                    backgroundColor: '#cfcfcf',
                }
            },
            false: {
                color: 'text.1',
                '&:hover': {
                    color: 'text.2',
                }
            }
        },
        size: {
            sm: {
                width: '20px',
                height: '20px',
            },
            md: {
                width: '26px',
                height: '26px',
            },
            lg: {
                width: '32px',
                height: '32px',
            },
            xl: {
                width: '38px',
                height: '38px',
            },
        }
    }
});