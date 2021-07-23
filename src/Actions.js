import React from 'react';

import { Box, createStyles, Fab, makeStyles } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';

export const useStyles = makeStyles(() =>
    createStyles({
        floatingButtonsRoot: {
            position: 'fixed',
            bottom: '7mm',
            right: '7mm',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            '& > button': {
                marginTop: '2mm',
            },
        },
    }),
);

export function Actions() {
    const classes = useStyles();

    return (
        <Box className={`${classes.floatingButtonsRoot} cv-fabs`}>
            <Fab
                color='primary'
                aria-label='add'
                onClick={() => {
                    window.print();
                }}
            >
                <PrintIcon />
            </Fab>
        </Box>
    );
}
