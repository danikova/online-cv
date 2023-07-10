import { Box, createStyles, makeStyles } from '@material-ui/core';
import { SchoolSection } from './SchoolSection';
import { WorkSection } from './WorkSection';
import { LanguagesSection } from './LanguagesSection';
import { HobbySection } from './HobbySection';
import { SkillsSection } from './SkillsSection';

const useStyles = makeStyles((theme) =>
  createStyles({
    sectionsRoot: {
      margin: '0.1in 0',
    },
    sectionsWrapper: {
      margin: '0.2in 0',
    },
  })
);

export function Sections() {
  const classes = useStyles();

  return (
    <Box className={classes.sectionsRoot}>
      <Box className={classes.sectionsWrapper}>
        <WorkSection />
        <SkillsSection />
        <SchoolSection />
        <LanguagesSection />
        <HobbySection />
      </Box>
    </Box>
  );
}
