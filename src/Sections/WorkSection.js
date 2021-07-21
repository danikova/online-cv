import React from 'react';
import Section from './Section';
import WorkIcon from '@material-ui/icons/Work';
import { Timeline, TimelineItem } from '../Timeline';
import {
    Box,
    createStyles,
    makeStyles,
    Typography,
} from '@material-ui/core';
import Moment from 'react-moment';
import moment from 'moment';

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

function WorkYears({ from, to, present = false }) {
    from = new Date(from);
    to = new Date(to);

    const diffDuration = moment.duration(moment(to).diff(moment(from)));
    let durationText = moment
        .duration(diffDuration.months(), 'month')
        .humanize();
    if (diffDuration.years() !== 0)
        durationText = `${moment
            .duration(diffDuration.years(), 'year')
            .humanize()} ${durationText}`;

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
        >
            <Typography variant={'h6'}>
                Nokia Solutions and Networks Kft.
            </Typography>
            <Timeline>
                <TimelineItem
                    oppContent={
                        <WorkYears from='2020.01.01' to={Date()} present />
                    }
                    content={
                        <Box>
                            <Typography>Software Specialist</Typography>
                            <Typography variant={'caption'}>
                                Python Django alapú webes alkalmazás
                                fejlesztése, React klienssel ami YANG alapú
                                adatszerkezeteket kezel és validál. Több
                                konténeres struktúrával, amit eleinte Docker
                                Compose-al OpenStack-be, majd Kubernetes-el
                                saját Cloudok-ba szállítottunk a vevőkhöz.
                            </Typography>
                        </Box>
                    }
                />
                <TimelineItem
                    oppContent={<WorkYears from='2019.07.01' to='2020.01.01' />}
                    content={
                        <Box>
                            <Typography>Verification Specialist</Typography>
                            <Typography variant={'caption'}>
                                Python webes alkalmazások fejleztését,
                                karbantartását végeztem a System Verification
                                csapat számára, a fő cél az automatizálás volt.
                            </Typography>
                        </Box>
                    }
                />
                <TimelineItem
                    oppContent={<WorkYears from='2018.04.01' to='2019.07.01' />}
                    content={
                        <Box>
                            <Typography>DevOps Engineer</Typography>
                            <Typography variant={'caption'}>
                                Egy flexibilis monitorozó rendszert
                                fejlesztettem bele a termékünkben, ami képes
                                volt baremetal és hálózati statisztikák
                                gyűjtésére, ezen felül több biztonsági
                                fejlesztésen dolgoztam.
                            </Typography>
                        </Box>
                    }
                />
                <TimelineItem
                    oppContent={<WorkYears from='2017.04.01' to='2018.04.01' />}
                    content={
                        <Box>
                            <Typography>Software Developer Intern</Typography>
                            <Typography variant={'caption'}>
                                Egy webes, YANG-on alapuló konfiguráció tool-on
                                dolgoztam.
                            </Typography>
                        </Box>
                    }
                    last
                />
            </Timeline>

            <Typography variant={'h6'}>Cadline Kft.</Typography>
            <Timeline>
                <TimelineItem
                    oppContent={<WorkYears from='2016.06.01' to='2016.08.01' />}
                    content={
                        <Box>
                            <Typography>Software Developer Intern</Typography>
                            <Typography variant={'caption'}>
                                Résztvettem az Archline.XP belsőépítészeti
                                szoftver fejleszésén, egy falburkoló
                                algoritmuson dolgoztam ami képes véletlen méretű
                                négyszögekkel lefedni egyz adott területet.
                            </Typography>
                        </Box>
                    }
                    last
                />
            </Timeline>
        </Section>
    );
}
