import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  mediumIcon: {
    fontSize: 32,
  },
  sectionContent: {
    margin: '0 0 0.2in 0.1in',
  },
});

class Section extends React.Component {
  render() {
    // @ts-ignore
    const { icon: Icon, classes, title, children, pageBreak = false, ...props } = this.props;
    return (
      <Box {...props}>
        <Grid container spacing={3} className={pageBreak ? 'cv-section-page-break' : ''}>
          <Grid item xs={'auto'}>
            <Icon className={classes.mediumIcon} />
          </Grid>
          <Grid item xs={'auto'}>
            <Typography noWrap={true} variant="h6">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.sectionContent}>{children}</Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(Section);
