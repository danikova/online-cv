import React from 'react';
import Section from './Section';
import BarChartIcon from '@material-ui/icons/BarChart';
import { createStyles, LinearProgress, makeStyles, Typography } from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({}));

export function SkillsSection() {
    const classes = useStyles();

    return (
        <Section
            icon={BarChartIcon}
            title='Szakmai ismeretek'
        >
            <Typography>Python</Typography>
            <LinearProgress variant='determinate' value={75} />
            <Typography>Js</Typography>
            <LinearProgress variant='determinate' value={62} />
            <Typography>Linux</Typography>
            <LinearProgress variant='determinate' value={65} />
        </Section>
    );
}
