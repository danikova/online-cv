import React from 'react';
import Section from './Section';
import SchoolIcon from '@material-ui/icons/School';

import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import { Timeline, TimelineItem } from '../Components/Timeline';
import { FormattedMessage } from 'react-intl';

export const useStyles = makeStyles((theme) =>
    createStyles({
        schoolSectionRoot: {
            '& .MuiTimelineOppositeContent-root': {
                maxWidth: '100px',
                paddingLeft: 0,
                display: 'flex',
                justifyContent: 'flex-start',
            },
        },
    }),
);

const sumScoolData = [
    {
        year: '2019 - 2022',
        name: 'school.gdf.name',
    },
    {
        year: '2014 - 2019',
        name: 'school.itk.name',
    },
    {
        year: '2011 - 2014',
        name: 'school.wattay.name',
    },
    {
        year: '2008 - 2011',
        name: 'school.petofi.name',
    },
];

export function SchoolSection() {
    const classes = useStyles();
    return (
        <Section
            icon={SchoolIcon}
            title='Tanulmányok'
            className={classes.schoolSectionRoot}
        >
            <Timeline>
                {sumScoolData.map((item, i) => (
                    <TimelineItem
                        key={`school-timeline-item-${i}`}
                        oppContent={
                            <Typography color='textSecondary'>
                                {item.year}
                            </Typography>
                        }
                        content={
                            <Box>
                                <Typography>
                                    <FormattedMessage id={item.name} />
                                </Typography>
                            </Box>
                        }
                        last={sumScoolData.length - 1 === i}
                    />
                ))}
            </Timeline>
        </Section>
    );
}
