import React from 'react';
import Section from './Section';
import BarChartIcon from '@material-ui/icons/BarChart';
import {
    Box,
    Chip,
    createStyles,
    LinearProgress,
    makeStyles,
    Typography,
} from '@material-ui/core';

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
    }),
);

const sumSkillData = [
    {
        name: 'Python',
        percent: 75,
        message: 'asd asd',
        skillChips: [
            'Django',
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
        message: 'asd asd',
        skillChips: [
            '@ag-grid-community/core',
            '@material-ui/core',
            'axios',
            'formik',
            'history',
            'notistack',
            'react',
            'react-contextmenu',
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
        ],
        urlTemplate: (pkgName) => `https://www.npmjs.com/package/${pkgName}`,
    },
    {
        name: 'Linux',
        percent: 65,
        message: '',
        skillChips: [
            'Lubuntu',
            'Ubuntu',
            'CentOS',
            'Rocky_Linux',
            'Alpine_Linux',
            'Ubuntu',
        ],
        urlTemplate: (distroName) =>
            `https://en.wikipedia.org/wiki/${distroName}`,
    },
    {
        name: 'Docker',
        percent: 63,
        message: '',
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
            'minio'
        ],
        urlTemplate: (imageName) => `https://hub.docker.com/_/${imageName}`,
    },
    {
        name: 'Kubernetes',
        percent: 40,
        message: '',
        skillChips: [],
        urlTemplate: (pkgName) => `https://pypi.org/project/${pkgName}/`,
    },
];

export function SkillsSection() {
    const classes = useStyles();

    return (
        <Section icon={BarChartIcon} title='Szakmai ismeretek'>
            {sumSkillData.map((item, i) => (
                <Box key={`skill-item-${i}`}>
                    <Typography>{item.name}</Typography>
                    <LinearProgress
                        variant='determinate'
                        value={item.percent}
                    />
                    <Typography variant='caption'>{item.message}</Typography>
                    <Box className={classes.chipsWrapper}>
                        {item.skillChips
                            .sort(globalCollator.compare)
                            .map((chipName, j) => {
                                let chipProps = {
                                    label: chipName,
                                    variant: 'outlined',
                                    key: `skill-item-${j}`,
                                };
                                if (item.urlTemplate)
                                    chipProps = {
                                        ...chipProps,
                                        component: 'a',
                                        href: item.urlTemplate(chipName),
                                        clickable: 'true',
                                    };
                                return <Chip {...chipProps} />;
                            })}
                    </Box>
                </Box>
            ))}
        </Section>
    );
}
