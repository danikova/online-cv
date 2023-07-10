import BaseSection from './BaseSection';
import PublicIcon from '@material-ui/icons/Public';
import { FormattedMessage, useIntl } from 'react-intl';

export function LanguageSection() {
  const intl = useIntl();

  return (
    <BaseSection
      icon={PublicIcon}
      title={intl.formatMessage({ id: 'lang.sectionTitle' })}
    >
      <div className='flex flex-col gap-4'>
        <div>
          <h5 className='font-medium'><FormattedMessage id="lang.hungarian" /></h5>
          <div><FormattedMessage id="lang.hungarian.levelDescription" /></div>
        </div>
        <div>
          <h5 className='font-medium'><FormattedMessage id="lang.english" /></h5>
          <div><FormattedMessage id="lang.english.levelDescription" /></div>
        </div>
      </div>
    </BaseSection>
  );
}
