import BaseSection from './BaseSection';
import { MdDirectionsBike } from 'react-icons/md';
import { FormattedMessage, useIntl } from 'react-intl';

export function HobbySection() {
  const intl = useIntl();

  return (
    <BaseSection
      icon={MdDirectionsBike}
      title={intl.formatMessage({ id: 'hobby.sectionTitle' })}
    >
      <div className='flex flex-col gap-4'>
        <div>
          <h5 className='font-bold'><FormattedMessage id="hobby.programing.title" /></h5>
          <div><FormattedMessage id="hobby.programing.description" /></div>
        </div>
        <div>
          <h5 className='font-bold'><FormattedMessage id="hobby.cycling.title" /></h5>
          <div><FormattedMessage id="hobby.cycling.description" /></div>
        </div>
      </div>
    </BaseSection>
  );
}
