import React from 'react';

import TimelineOriginal from '@material-ui/lab/Timeline';
import TimelineItemOriginal from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
    createStyles({
        timelineRoot: {
            margin: 0,
            padding: 0,
            '@media not print': {
                [theme.breakpoints.down('sm')]: {
                    '& .MuiTimelineItem-root': {
                        display: 'block !important',
                    },
                    '& .MuiTimelineItem-root .MuiTimelineSeparator-root': {
                        display: 'none',
                    },
                    '& .MuiTimelineItem-root .MuiTimelineOppositeContent-root':
                        {
                            paddingLeft: 0,
                            marginTop: '10px',
                            textAlign: 'left',
                        },
                },
            },
        },
    }),
);

export function TimelineItem({ oppContent, content, last = false }) {
    return (
        <TimelineItemOriginal>
            <TimelineOppositeContent>{oppContent}</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                {!last && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{content}</TimelineContent>
        </TimelineItemOriginal>
    );
}

export function Timeline({ children, ...props }) {
    const classes = useStyles();

    return (
        <TimelineOriginal className={classes.timelineRoot} {...props}>
            {children}
        </TimelineOriginal>
    );
}
