import React from 'react';
import Section from './Section';
import WorkIcon from '@material-ui/icons/Work';
import { Timeline, TimelineItem } from '../Components/Timeline';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import humanizeDuration from 'humanize-duration';
import Moment from 'react-moment';

export const useStyles = makeStyles((theme) =>
    createStyles({
        workSectionRoot: {
            '& .MuiTimelineOppositeContent-root': {
                maxWidth: '160px',
                paddingLeft: 0,
                '& .date': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    alignContent: 'space-around',
                    '& .dash': {
                        margin: '0 5px',
                    },
                    '& .present': {
                        opacity: 0,
                    },
                },
            },
        },
        dividerMargin: { margin: '30px' },
    }),
);

const sumWorkData = [
    {
        company: 'Nokia Solutions and Networks Kft.',
        timeline: [
            {
                from: '2020.01.01',
                to: Date(),
                present: true,
                title: 'Software Specialist',
                caption:
                    'Python Django alapú webes alkalmazás fejlesztése, React klienssel ami YANG alapú adatszerkezeteket kezel és validál. Több konténeres struktúrával, amit eleinte Docker Compose-al OpenStack-be, majd Kubernetes-el saját Cloudok-ba szállítottunk a vevőkhöz.',
            },
            {
                from: '2019.07.01',
                to: '2020.01.01',
                title: 'Verification Specialist',
                caption:
                    'Python webes alkalmazások fejleztését, karbantartását végeztem a System Verification csapat számára, a fő cél az automatizálás volt.',
            },
            {
                from: '2018.04.01',
                to: '2019.07.01',
                title: 'DevOps Engineer',
                caption:
                    'Egy flexibilis monitorozó rendszert fejlesztettem bele a termékünkben, ami képes volt baremetal és hálózati statisztikák gyűjtésére, ezen felül több biztonsági fejlesztésen dolgoztam.',
            },
            {
                from: '2017.04.01',
                to: '2018.04.01',
                title: 'Software Developer Intern',
                caption:
                    'Egy webes, YANG-on alapuló konfiguráció tool-on dolgoztam.',
            },
        ],
    },
    {
        company: 'Cadline Kft.',
        timeline: [
            {
                from: '2016.06.01',
                to: '2016.08.01',
                title: 'Software Developer Intern',
                caption:
                    'Résztvettem az Archline.XP belsőépítészeti szoftver fejleszésén, egy falburkoló algoritmuson dolgoztam ami képes véletlen méretű négyszögekkel lefedni egyz adott területet.',
            },
        ],
    },
];

function WorkYears({ from, to, present = false }) {
    from = new Date(from);
    to = new Date(to);

    const durationText = humanizeDuration(to - from, {
        language: 'hu',
        units: ['y', 'mo'],
        round: true,
    });

    return (
        <Box>
            <Typography color='textSecondary' className='date'>
                <Moment format='YYYY MMM' withTitle>
                    {from}
                </Moment>
                <span className='dash'>-</span>
                <Moment
                    format='YYYY MMM'
                    withTitle
                    className={present ? 'present' : ''}
                >
                    {to}
                </Moment>
            </Typography>
            <Typography color='textSecondary'>{durationText}</Typography>
        </Box>
    );
}

export function WorkSection() {
    const classes = useStyles();

    return (
        <Section
            icon={WorkIcon}
            title='Szakmai tapasztalatok'
            className={classes.workSectionRoot}
            pageBreak={true}
        >
            {sumWorkData.map((item, i) => (
                <Box key={`company-list-${i}`}>
                    <Typography variant={'h6'}>{item.company}</Typography>
                    <Timeline>
                        {item.timeline.map((timelineData, j) => (
                            <TimelineItem
                                key={`timeline-item-${j}`}
                                oppContent={
                                    <WorkYears
                                        from={timelineData.from}
                                        to={timelineData.to}
                                        present={timelineData.present}
                                    />
                                }
                                last={item.timeline.length - 1 === j}
                                content={
                                    <Box>
                                        <Typography>
                                            {timelineData.title}
                                        </Typography>
                                        <Typography variant={'caption'}>
                                            {timelineData.caption}
                                        </Typography>
                                    </Box>
                                }
                            />
                        ))}
                    </Timeline>
                </Box>
            ))}
        </Section>
    );
}
