import React from 'react';
import Section from './Section';
import PublicIcon from '@material-ui/icons/Public';
import { List, ListItem, ListItemText } from '@material-ui/core';
export function LanguagesSection() {
    return (
        <Section icon={PublicIcon} title='Nyelvi ismeretek'>
            <List>
                <ListItem>
                    <ListItemText
                        primary='Angol'
                        secondary='társalgasi szint, szakmai nyelv'
                    />
                </ListItem>
            </List>
        </Section>
    );
}
