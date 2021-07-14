import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Grid,
    Typography,
    withStyles,
} from '@material-ui/core';

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
        const Icon = this.props.icon;
        return (
            <Grid container spacing={3}>
                <Grid item md={'auto'}>
                    <Icon className={this.props.classes.mediumIcon} />
                </Grid>
                <Grid item sm={'auto'}>
                    <Typography noWrap={true} variant='h6'>
                        {this.props.title}
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <Box className={this.props.classes.sectionContent}>
                        {this.props.children}
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);
