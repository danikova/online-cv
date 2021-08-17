import React from 'react';
import Section from './Section';
import WorkIcon from '@material-ui/icons/Work';
import { Timeline, TimelineItem } from '../Components/Timeline';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import humanizeDuration from 'humanize-duration';
import Moment from 'react-moment';
import { useLocale } from '../lang';
import { FormattedMessage, useIntl } from 'react-intl';

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
        company: 'work.nokia',
        timeline: [
            {
                from: '2020.01.01',
                to: Date(),
                present: true,
                title: 'work.nokiaSWSpecialist.title',
                caption: 'work.nokiaSWSpecialist.caption',
            },
            {
                from: '2019.07.01',
                to: '2020.01.01',
                title: 'work.nokiaVerificationSpecialist.title',
                caption: 'work.nokiaVerificationSpecialist.caption',
            },
            {
                from: '2018.04.01',
                to: '2019.07.01',
                title: 'work.nokiaDevOpsEngineer.title',
                caption: 'work.nokiaDevOpsEngineer.caption',
            },
            {
                from: '2017.04.01',
                to: '2018.04.01',
                title: 'work.nokiaSWDeveloperIntern.title',
                caption: 'work.nokiaSWDeveloperIntern.caption',
            },
        ],
    },
    {
        company: 'work.cadline',
        timeline: [
            {
                from: '2016.06.01',
                to: '2016.08.01',
                title: 'work.cadlineSWDeveloperIntern.title',
                caption: 'work.cadlineSWDeveloperIntern.caption',
            },
        ],
    },
];

function WorkYears({ from, to, present = false }) {
    const { locale } = useLocale();
    from = new Date(from);
    to = new Date(to);

    const durationText = humanizeDuration(to - from, {
        language: locale,
        units: ['y', 'mo'],
        round: true,
    });

    return (
        <Box>
            <Typography color='textSecondary' className='date'>
                <Moment format='YYYY MMM' withTitle locale={locale}>
                    {from}
                </Moment>
                <span className='dash'>-</span>
                <Moment
                    format='YYYY MMM'
                    withTitle
                    className={present ? 'present' : ''}
                    locale={locale}
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
    const intl = useIntl();

    return (
        <Section
            icon={WorkIcon}
            title={intl.formatMessage({ id: 'work.sectionTitle' })}
            className={classes.workSectionRoot}
            pageBreak={true}
        >
            {sumWorkData.map((item, i) => (
                <Box key={`company-list-${i}`}>
                    <Typography variant={'h6'}>
                        <FormattedMessage id={item.company} />
                    </Typography>
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
                                            <FormattedMessage
                                                id={timelineData.title}
                                            />
                                        </Typography>
                                        <Typography variant={'caption'}>
                                            <FormattedMessage
                                                id={timelineData.caption}
                                            />
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
