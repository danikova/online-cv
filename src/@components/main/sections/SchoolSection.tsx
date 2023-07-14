import Section from './BaseSection';
import { MdSchool } from 'react-icons/md';
import Timeline, { TimelineItem } from '@components/Timeline';
import { FormattedMessage, useIntl } from 'react-intl';

const sumScoolData = [
  {
    year: '2018 - 2022',
    name: 'school.gdf.name',
  },
  {
    year: '2014 - 2016',
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
  const intl = useIntl();

  return (
    <Section
      icon={MdSchool}
      title={intl.formatMessage({ id: 'school.sectionTitle' })}
    >
      <Timeline>
        {sumScoolData.map((item, i) => (
          <TimelineItem
            key={`school-timeline-item-${i}`}
            oppContent={<span className='text-slate-500'>{item.year}</span>}
            last={sumScoolData.length - 1 === i}
            className='min-h-[60px]'
          >
            <div>
              <FormattedMessage id={item.name} />
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
