import React from 'react';
import {
    Avatar,
    createStyles,
    Grid,
    makeStyles,
    Typography,
    Link,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) =>
    createStyles({
        profileRoot: {
            '& a': {
                marginLeft: '4px',
            },
        },
        largeAvatar: {
            width: theme.spacing(21),
            height: theme.spacing(21),
        },
    }),
);

export function Profile() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.profileRoot}>
            <Grid item xs={4} sm={'auto'}>
                <Avatar
                    src={`${process.env.PUBLIC_URL}/profile.picture.jpg`}
                    variant='square'
                    alt='Kovács Dániel'
                    className={classes.largeAvatar}
                />
            </Grid>
            <Grid item xs={8} sm={6}>
                <Typography noWrap={true} variant='h2'>
                    <FormattedMessage id='profile.name' />
                </Typography>
                <Typography noWrap={true}>
                    <FormattedMessage id='profile.dateOfBirth.key' />:{' '}
                    <FormattedMessage id='profile.dateOfBirth.value' />
                </Typography>
                <Typography noWrap={true}>
                    <FormattedMessage id='profile.nationality.key' />:{' '}
                    <FormattedMessage id='profile.nationality.value' />
                </Typography>
                <Typography noWrap={true}>
                    <FormattedMessage id='profile.location.key' />:
                    <Link href='https://www.google.com/maps/place/Budapest,+XVI.+ker%C3%BClet/@47.5191306,19.1690793,13z/'>
                        <FormattedMessage id='profile.location.value' />
                    </Link>
                </Typography>
                <Typography noWrap={true}>
                    <FormattedMessage id='profile.mobileNumber.key' />:
                    <Link href='tel:+36705108334'>
                        <FormattedMessage id='profile.mobileNumber.value' />
                    </Link>
                </Typography>
                <Typography noWrap={true}>
                    <FormattedMessage id='profile.emailAddress.key' />:
                    <Link href='mailto:kovacs.daniel.9509@gmail.com'>
                        <FormattedMessage id='profile.emailAddress.value' />
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    );
}
