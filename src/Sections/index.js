import { Box, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

import { SchoolSection } from './SchoolSection';
import { WorkSection } from './WorkSection';
import { LanguagesSection } from './LanguagesSection';
import { HobbySection } from './HobbySection';

const useStyles = makeStyles((theme) =>
    createStyles({
        sectionsRoot: {
            margin: '0.1in 0',
        },
        sectionsWrapper: {
            margin: '0.2in 0',
        },
    }),
);

export function Sections() {
    const classes = useStyles();

    return (
        <Box className={classes.sectionsRoot}>
            <Box className={classes.sectionsWrapper}>
                <WorkSection />
                <SchoolSection />
                <LanguagesSection />
                <HobbySection />
            </Box>
        </Box>
    );
}
