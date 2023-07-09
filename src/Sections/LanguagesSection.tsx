import Section from './Section';
import PublicIcon from '@material-ui/icons/Public';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useIntl } from 'react-intl';

export function LanguagesSection() {
  const intl = useIntl();

  return (
    <Section
      // @ts-ignore
      icon={PublicIcon}
      title={intl.formatMessage({ id: 'lang.sectionTitle' })}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={intl.formatMessage({ id: 'lang.hungarian' })}
            secondary={intl.formatMessage({
              id: 'lang.hungarian.levelDescription',
            })}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={intl.formatMessage({ id: 'lang.english' })}
            secondary={intl.formatMessage({
              id: 'lang.english.levelDescription',
            })}
          />
        </ListItem>
      </List>
    </Section>
  );
}
