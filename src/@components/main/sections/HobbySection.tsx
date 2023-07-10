import Section from './BaseSection';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useIntl } from 'react-intl';

export function HobbySection() {
  const intl = useIntl();

  return (
    <Section
      // @ts-ignore
      icon={DirectionsBikeIcon}
      title={intl.formatMessage({ id: 'hobby.sectionTitle' })}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={intl.formatMessage({
              id: 'hobby.programing.title',
            })}
            secondary={intl.formatMessage({
              id: 'hobby.programing.description',
            })}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={intl.formatMessage({
              id: 'hobby.cycling.title',
            })}
            secondary={intl.formatMessage({
              id: 'hobby.cycling.description',
            })}
          />
        </ListItem>
      </List>
    </Section>
  );
}
