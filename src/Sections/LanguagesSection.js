import React from 'react';
import Section from './Section';
import PublicIcon from '@material-ui/icons/Public';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useIntl } from 'react-intl';

export function LanguagesSection() {
    const intl = useIntl();

    return (
        <Section
            icon={PublicIcon}
            title={intl.formatMessage({ id: 'lang.sectionTitle' })}
        >
            <List>
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
