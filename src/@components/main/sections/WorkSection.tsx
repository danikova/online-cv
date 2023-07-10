import BaseSection from './BaseSection';
import WorkIcon from '@material-ui/icons/Work';
import humanizeDuration from 'humanize-duration';
import { useLocale } from '@lang';
import { FormattedMessage, useIntl } from 'react-intl';
import Timeline, { TimelineItem } from '@components/Timeline';
import { useDayJs } from '@utils/hooks';
import { useMemo } from 'react';

const sumWorkData = [
  {
    company: 'work.nokia',
    timeline: [
      {
        from: '2022.06.01',
        to: new Date(),
        present: true,
        title: 'work.nokiaWebGUIDev.title',
        caption: 'work.nokiaWebGUIDev.caption',
      },
      {
        from: '2020.01.01',
        to: '2022.06.01',
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

  const fromDate = useMemo(() => new Date(from), [from]);
  const toDate = useMemo(() => new Date(to), [to]);

  const fromStr = useDayJs(fromDate, "YYYY MMM");
  const toStr = useDayJs(toDate, "YYYY MMM");

  // @ts-ignore
  const durationText = useMemo(() => humanizeDuration(toDate - fromDate, {
    language: locale,
    units: ['y', 'mo'],
    round: true,
  }), [fromDate, toDate])

  return (
    <div>
      <p>{fromStr}<span className="px-1">-</span>{present ? '' : toStr}</p>
      <p>{durationText}</p>
    </div>
  );
}

export default function WorkSection() {
  const intl = useIntl();

  return (
    <BaseSection
      icon={WorkIcon}
      title={intl.formatMessage({ id: 'work.sectionTitle' })}
    >
      {sumWorkData.map((item, i) => (
        <div key={`company-list-${i}`}>
          <h4 className='text-lg mb-4 font-medium'>
            <FormattedMessage id={item.company} />
          </h4>
          <Timeline>
            {item.timeline.map((timelineData, j) => (
              <TimelineItem
                key={`timeline-item-${j}`}
                oppContent={<WorkYears from={timelineData.from} to={timelineData.to} present={timelineData.present} />}
                last={item.timeline.length - 1 === j}
              >
                <h5 className='font-medium'>
                  <FormattedMessage id={timelineData.title} />
                </h5>
                <div className='mb-4'>
                  <FormattedMessage id={timelineData.caption} />
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      ))}
    </BaseSection>
  );
}
