import React from 'react';
import Section from './Section';
import PublicIcon from '@material-ui/icons/Public';
import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
    createStyles({
        rightAlignedGrid: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    }),
);

export function LanguagesSection() {
    const classes = useStyles();

    return (
        <Section icon={PublicIcon} title='Nyelvi ismeretek'>
            <Grid container spacing={3}>
                <Grid item xs={2} className={classes.rightAlignedGrid}>
                    <Typography>Angol</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant={'caption'}>
                        társalgasi szint, szakmai nyelv
                    </Typography>
                </Grid>
                <Grid item xs={2} className={classes.rightAlignedGrid}>
                    <Typography>Német</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant={'caption'}>
                        társalgasi szint (régen nem használtam)
                    </Typography>
                </Grid>
            </Grid>
        </Section>
    );
}
