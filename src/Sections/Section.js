import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    mediumIcon: {
        fontSize: 32,
    },
    sectionContent: {
        margin: '0 0 0.5in 0.1in',
    },
});

class Section extends React.Component {
    render() {
        const { icon: Icon, classes, title, children, ...props } = this.props;
        return (
            <Box {...props}>
                <Grid container spacing={3}>
                    <Grid item md={'auto'}>
                        <Icon className={classes.mediumIcon} />
                    </Grid>
                    <Grid item sm={'auto'}>
                        <Typography noWrap={true} variant='h6'>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Box className={classes.sectionContent}>{children}</Box>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);
