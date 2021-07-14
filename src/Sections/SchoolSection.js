import React from 'react';
import Section from './Section';
import SchoolIcon from '@material-ui/icons/School';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import { StaticRecursiveTreeView } from '../RecursiveTreeView';

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

const gdfSchoolData = [
    {
        name: 'matematikai ismeretek',
        children: [
            { name: 'nulladrendű logikai ismeretek' },
            { name: 'gráfelméleti ismeretek' },
            { name: 'valószínűség számítási ismeretek' },
        ],
    },
    {
        name: 'informatikai ismeretek',
        children: [
            {
                name: 'számítógéphálózati protokollok',
            },
        ],
    },
    {
        name: 'programozasi ismeretek',
        children: [
            { name: 'különböző adatszerkezetek részletes ismerete' },
            { name: 'algoritmusok tervezése, implementálása' },
            { name: 'statikus és dinamikus weboldalak készítése' },
        ],
    },
];

const pazmanySchoolData = [
    {
        name: 'matematikai ismeretek',
        children: [
            { name: 'nulladrendű logikai ismeretek' },
            { name: 'gráfelméleti ismeretek' },
            { name: 'valószínűség számítási ismeretek' },
        ],
    },
    {
        name: 'informatikai ismeretek',
        children: [
            {
                name: 'számítógéphálózati protokollok',
            },
        ],
    },
    {
        name: 'programozasi ismeretek',
        children: [
            { name: 'különböző adatszerkezetek részletes ismerete' },
            { name: 'algoritmusok tervezése, implementálása' },
            { name: 'statikus és dinamikus weboldalak készítése' },
        ],
    },
];

const wattaySchoolData = [
    {
        name: 'Informatikus szak',
        children: [
            {
                name: 'Szakmai tárgyak',
                children: [{ name: 'matematika' }, { name: 'informatika' }],
            },
        ],
    },
];

const petofiSchoolData = [
    {
        name: 'hatosztályos gimnáziumi képzés',
    },
];

function ScoolTimelineItem({ year, content, last = false }) {
    const classes = useStyles();

    return (
        <TimelineItem>
            <TimelineOppositeContent className={classes.topc}>
                <Typography color='textSecondary'>{year}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                {!last && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{content}</TimelineContent>
        </TimelineItem>
    );
}

export function SchoolSection() {
    const classes = useStyles();

    return (
        <Section icon={SchoolIcon} title='Tanulmányok'>
            <Timeline className={classes.timelineRoot}>
                <ScoolTimelineItem
                    year={'2019 - (2021)'}
                    content={
                        <Box>
                            <Typography>
                                Gábor Dénes Főiskola (Távoktatás), Budapest
                                (Magyarország)
                            </Typography>
                            <StaticRecursiveTreeView data={gdfSchoolData} />
                        </Box>
                    }
                />
                <ScoolTimelineItem
                    year={'2014 - 2019'}
                    content={
                        <Box>
                            <Typography>
                                Pázmány Péter Katolikus Egyetem - Információs
                                Technológiai Kar, Budapest (Magyarország)
                            </Typography>
                            <StaticRecursiveTreeView data={pazmanySchoolData} />
                        </Box>
                    }
                />
                <ScoolTimelineItem
                    year={'2011 - 2014'}
                    content={
                        <Box>
                            <Typography>
                                Wattay Középiskola és Szakiskola, Kiskőrös
                                (Magyarország)
                            </Typography>
                            <StaticRecursiveTreeView data={wattaySchoolData} />
                        </Box>
                    }
                />
                <ScoolTimelineItem
                    year={'2008 - 2011'}
                    content={
                        <Box>
                            <Typography>
                                Kiskőrösi Petőfi Sándor Evangélikus Óvoda,
                                Általános Iskola, Gimnázium és Kertészeti
                                Szakközépiskola, Kiskőrös
                            </Typography>
                            <StaticRecursiveTreeView data={petofiSchoolData} />
                        </Box>
                    }
                    last
                />
            </Timeline>
        </Section>
    );
}
