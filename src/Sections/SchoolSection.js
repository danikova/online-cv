import React from 'react';
import Section from './Section';
import SchoolIcon from '@material-ui/icons/School';

import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import { StaticRecursiveTreeView } from '../Components/StaticRecursiveTreeView';
import { Timeline, TimelineItem } from '../Components/Timeline';

export const useStyles = makeStyles((theme) =>
    createStyles({
        schoolSectionRoot: {
            '& .MuiTimelineOppositeContent-root': {
                maxWidth: '100px',
                paddingLeft: 0,
                display: 'flex',
                justifyContent: 'flex-start'
            },
        },
    }),
);

// const gdfSchoolData = [
//     {
//         name: 'informatikai ismeretek',
//         children: [
//             { name: 'SQL adatbázisok' },
//             { name: '.NET keretrendszer' },
//             { name: 'Windows / Linux szerverek üzemeltetése' },
//             { name: 'mesterseges inteligenciai fogalmak' },
//         ],
//     },
//     {
//         name: 'programozasi ismeretek',
//         children: [
//             { name: '.NET keretrendszer' },
//             { name: 'mobil alkalmazás fejlesztés' },
//         ],
//     },
// ];

// const pazmanySchoolData = [
//     {
//         name: 'matematikai ismeretek',
//         children: [
//             { name: 'analízis' },
//             { name: 'nulladrendű logikai' },
//             { name: 'gráfelméleti' },
//             { name: 'valószínűség számítási' },
//         ],
//     },
//     {
//         name: 'informatikai ismeretek',
//         children: [
//             {
//                 name: 'számítógéphálózati protokollok',
//             },
//         ],
//     },
//     {
//         name: 'programozasi ismeretek',
//         children: [
//             { name: 'különböző adatszerkezetek részletes' },
//             { name: 'algoritmusok tervezése, implementálása' },
//             { name: 'dinamikus weboldalak készítése' },
//         ],
//     },
// ];

// const wattaySchoolData = [
//     {
//         name: 'informatikus szak',
//         children: [
//             {
//                 name: 'szakmai tárgyak',
//                 children: [{ name: 'matematika' }, { name: 'informatika' }],
//             },
//         ],
//     },
// ];

// const petofiSchoolData = [
//     {
//         name: 'hatosztályos gimnáziumi képzés',
//     },
// ];

const sumScoolData = [
    {
        year: '2019 - ',
        name: 'Gábor Dénes Főiskola (Távoktatás), Budapest (Magyarország)',
        data: [], //gdfSchoolData,
    },
    {
        year: '2014 - 2019',
        name: 'Pázmány Péter Katolikus Egyetem - Információs Technológiai Kar, Budapest (Magyarország)',
        data: [], //pazmanySchoolData,
    },
    {
        year: '2011 - 2014',
        name: 'Wattay Középiskola és Szakiskola, Kiskőrös (Magyarország)',
        data: [], //wattaySchoolData,
    },
    {
        year: '2008 - 2011',
        name: 'Kiskőrösi Petőfi Sándor Evangélikus Óvoda, Általános Iskola, Gimnázium és Kertészeti Szakközépiskola, Kiskőrös (Magyarország)',
        data: [], //petofiSchoolData,
    },
];

export function SchoolSection() {
    const classes = useStyles();
    return (
        <Section
            icon={SchoolIcon}
            title='Tanulmányok'
            className={classes.schoolSectionRoot}
        >
            <Timeline>
                {sumScoolData.map((item, i) => (
                    <TimelineItem
                        key={`school-timeline-item-${i}`}
                        oppContent={
                            <Typography color='textSecondary'>
                                {item.year}
                            </Typography>
                        }
                        content={
                            <Box>
                                <Typography>{item.name}</Typography>
                                <StaticRecursiveTreeView data={item.data} />
                            </Box>
                        }
                        last={sumScoolData.length - 1 === i}
                    />
                ))}
            </Timeline>
        </Section>
    );
}
