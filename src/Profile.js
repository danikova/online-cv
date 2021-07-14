import React from 'react';
import {
    Avatar,
    createStyles,
    Grid,
    makeStyles,
    Typography,
    Link,
} from '@material-ui/core';

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
            <Grid item xs={12} sm={'auto'}>
                <Avatar
                    src='/profile.picture.jpg'
                    variant='square'
                    alt='Kovács Dániel'
                    className={classes.largeAvatar}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography noWrap={true} variant='h2'>
                    Kovács Dániel
                </Typography>
                <Typography noWrap={true}>
                    Születési dátum: 1995.09.09
                </Typography>
                <Typography noWrap={true}>Állampolgárság: magyar</Typography>
                <Typography noWrap={true}>
                    Tartózkodási hely:
                    <Link href='https://www.google.com/maps/place/Budapest,+XVI.+ker%C3%BClet/@47.5191306,19.1690793,13z/data=!3m1!4b1!4m5!3m4!1s0x4741c4f1799506fb:0x500c4290c1ed630!8m2!3d47.5183029!4d19.191941'>
                        Budapest, XVI. kerület
                    </Link>
                </Typography>
                <Typography noWrap={true}>
                    Telefon szám:
                    <Link href='tel:+36705108334'>+36 70 510 8334</Link>
                </Typography>
                <Typography noWrap={true}>
                    E-mail cím:
                    <Link href='mailto:kovacs.daniel.9509@gmail.com'>
                        kovacs.daniel.9509@gmail.com
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    );
}
