import React from 'react';
import Section from './Section';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { List, ListItem, ListItemText } from '@material-ui/core';

export function HobbySection() {
    return (
        <Section icon={DirectionsBikeIcon} title='Hobby, szabadidő'>
            <List>
                <ListItem>
                    <ListItemText
                        primary='programozok'
                        secondary='legyen szó 3d-s dolgokról vagy saját játék fejlesztéséről esetleg saját weboldalakról'
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='biciklizek'
                        secondary='aktivan kerékpárral közlekedek a városban, szeretek hosszabb távokat tekerni'
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='kerékpár szerelés'
                        secondary='a nulláról építettem már több biciklit is'
                    />
                </ListItem>
            </List>
        </Section>
    );
}
