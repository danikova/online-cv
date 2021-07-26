import React from 'react';
import {
    Box,
    createStyles,
    Link,
    makeStyles,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        textWrapper: {
            opacity: 0.5,
            display: 'flex',
            alignItems: 'center',
            '& a': {
                marginLeft: '4px',
            },
        },
        signature: {
            height: '0.5in',
        },
    }),
);

export function Signature() {
    const classes = useStyles();

    return (
        <Box className={`${classes.wrapper} cv-signature-footer`}>
            <Box className={`${classes.textWrapper} cv-overengineerd-text`}>
                <Typography>overengineered by</Typography>
                <Link href='https://github.com/danikova'>danikova</Link>
            </Box>
            <img
                src={`${process.env.PUBLIC_URL}/signature.png`}
                alt='signature'
                className={classes.signature}
            />
        </Box>
    );
}
