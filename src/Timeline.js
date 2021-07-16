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
        },
        topc: {
            maxWidth: '100px',
            paddingLeft: 0,
        },
    }),
);

export function TimelineItem({
    oppContent,
    content,
    last = false,
    oppContentClass = null,
    contentClass = null,
}) {
    const classes = useStyles();

    return (
        <TimelineItemOriginal>
            <TimelineOppositeContent
                className={oppContentClass || classes.topc}
            >
                {oppContent}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                {!last && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className={contentClass}>
                {content}
            </TimelineContent>
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
