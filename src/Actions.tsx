import { useState } from 'react';

import { Box, createStyles, Fab, Grow, makeStyles } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import TranslateIcon from '@material-ui/icons/Translate';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { supportedLocales, useLocale } from './lang';

export const useStyles = makeStyles(() =>
  createStyles({
    floatingButtonsRoot: {
      position: 'fixed',
      bottom: '7mm',
      right: '7mm',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      '& > button': {
        marginTop: '2mm',
      },
    },
    floatingNavSelector: {
      position: 'absolute',
      right: 'calc(100% + 2mm)',
    },
  })
);

function TranslateGroup() {
  const classes = useStyles();
  const { locale, selectLanguage } = useLocale();
  const [active, setActive] = useState(false);
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={() => {
        setActive(!active);
      }}
    >
      <TranslateIcon />
      <Grow in={active}>
        <ToggleButtonGroup
          value={locale}
          exclusive
          className={classes.floatingNavSelector}
          onClick={(e) => e.stopPropagation()}
        >
          {Object.entries(supportedLocales).map(([key, value]) => {
            return (
              <ToggleButton value={key} key={key} onClick={() => selectLanguage(key)}>
                {value.visibleName}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Grow>
    </Fab>
  );
}

export function Actions() {
  const classes = useStyles();

  return (
    <Box className={`${classes.floatingButtonsRoot} cv-fabs`}>
      <TranslateGroup />
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => {
          window.print();
        }}
      >
        <PrintIcon />
      </Fab>
    </Box>
  );
}
