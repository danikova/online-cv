import Section from './BaseSection';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Box, Chip, createStyles, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { FormattedMessage, useIntl } from 'react-intl';

const globalCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});

export const useStyles = makeStyles((theme) =>
  createStyles({
    chipsWrapper: {
      padding: '10px 0 20px 20px',
      maxWidth: '400px',
      '&  [class^="MuiChip"]': {
        margin: '5px',
      },
    },
  })
);

const sumSkillData = [
  {
    name: 'Python',
    percent: 75,
    description: 'skills.python.description',
    skillChips: [
      'Django',
      'djangorestframework',
      'aiohttp',
      'lxml',
      'pytest',
      'openpyxl',
      'jsonschema',
      'pyang',
      'Pillow',
      'celery',
      'websocket-client',
      'daphne',
      'PyYAML',
      'redis',
      'rarfile',
    ],
    urlTemplate: (pkgName) => `https://pypi.org/project/${pkgName}`,
  },
  {
    name: 'JavaScript',
    percent: 62,
    description: 'skills.js.description',
    skillChips: [
      '@ag-grid-community/core',
      '@material-ui/core',
      'axios',
      'formik',
      'history',
      'notistack',
      'react',
      'react-contextmenu',
      'react-query',
      'moment',
      'redux',
      'react-router-dom',
      'draft-js',
      'react-dropzone',
      'react-facebook-login',
      'react-google-login',
      'react-helmet',
      'react-hook-form',
      'react95',
      'socket.io-client',
      '@hapi/joi',
      'chalk',
      'google-auth-library',
      'mongoose',
      'socket.io',
      'jest',
      'supertest',
      'cypress',
    ],
    urlTemplate: (pkgName) => `https://www.npmjs.com/package/${pkgName}`,
  },
  {
    name: 'Linux',
    percent: 65,
    description: 'skills.linux.description',
    skillChips: ['Lubuntu', 'Ubuntu', 'CentOS', 'Rocky_Linux', 'Alpine_Linux'],
    urlTemplate: (distroName) => `https://en.wikipedia.org/wiki/${distroName}`,
  },
  {
    name: 'Docker',
    percent: 63,
    description: 'skills.docker.description',
    skillChips: [
      'node',
      'mysql',
      'postgres',
      'mongo-express',
      'mongo',
      'busybox',
      'ubuntu',
      'redis',
      'mariadb',
      'httpd',
      'php',
      'debian',
      'jenkins',
      'vault',
      'matomo',
      'mono',
      'nginx',
      'registry',
      'docker',
      'centos',
      'python',
      'minio',
    ],
    urlTemplate: (imageName) => `https://hub.docker.com/_/${imageName}`,
  },
  {
    name: 'Kubernetes',
    percent: 40,
    description: 'skills.kubernetes.description',
    skillChips: [],
    urlTemplate: (pkgName) => `https://pypi.org/project/${pkgName}/`,
  },
];

export function SkillsSection() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Section
      // @ts-ignore
      icon={BarChartIcon}
      title={intl.formatMessage({ id: 'skills.sectionTitle' })}
      pageBreak={true}
    >
      {sumSkillData.map((item, i) => (
        <Box key={`skill-item-${i}`} className="MuiSkillItem-root">
          <Typography>{item.name}</Typography>
          <LinearProgress variant="determinate" value={item.percent} />
          <Typography variant="caption">
            <FormattedMessage id={item.description} />
          </Typography>
          <Box className={`${classes.chipsWrapper} cv-chipsWrapper`}>
            {item.skillChips.sort(globalCollator.compare).map((chipName, j) => {
              let chipProps = {
                label: chipName,
                variant: 'outlined',
                size: 'small',
                key: `skill-item-${j}`,
              };
              if (item.urlTemplate)
                chipProps = {
                  ...chipProps,
                  // @ts-ignore
                  component: 'a',
                  href: item.urlTemplate(chipName),
                  clickable: true,
                };
              // @ts-ignore
              return <Chip {...chipProps} />;
            })}
          </Box>
        </Box>
      ))}
    </Section>
  );
}
