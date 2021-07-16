import React from 'react';
import Section from './Section';
import SchoolIcon from '@material-ui/icons/School';

import { Box, Typography } from '@material-ui/core';
import { StaticRecursiveTreeView } from '../StaticRecursiveTreeView';
import { Timeline, TimelineItem } from '../Timeline';

const gdfSchoolData = [
    {
        name: 'informatikai ismeretek',
        children: [
            { name: 'SQL adatbázisok' },
            { name: '.NET keretrendszer' },
            { name: 'Windows / Linux szerverek üzemeltetése' },
            { name: 'Mesterseges inteligenciai fogalmak' },
        ],
    },
    {
        name: 'programozasi ismeretek',
        children: [
            { name: '.NET keretrendszer' },
            { name: 'mobil alkalmazás fejlesztés' },
        ],
    },
];

const pazmanySchoolData = [
    {
        name: 'matematikai ismeretek',
        children: [
            { name: 'analízis' },
            { name: 'nulladrendű logikai' },
            { name: 'gráfelméleti' },
            { name: 'valószínűség számítási' },
        ],
    },
    {
        name: 'informatikai ismeretek',
        children: [
            {
                name: 'számítógéphálózati protokollok',
            },
        ],
    },
    {
        name: 'programozasi ismeretek',
        children: [
            { name: 'különböző adatszerkezetek részletes' },
            { name: 'algoritmusok tervezése, implementálása' },
            { name: 'dinamikus weboldalak készítése' },
        ],
    },
];

const wattaySchoolData = [
    {
        name: 'Informatikus szak',
        children: [
            {
                name: 'Szakmai tárgyak',
                children: [{ name: 'matematika' }, { name: 'informatika' }],
            },
        ],
    },
];

const petofiSchoolData = [
    {
        name: 'hatosztályos gimnáziumi képzés',
    },
];

const sumScoolData = [
    {
        year: '2019 - (2021)',
        name: 'Gábor Dénes Főiskola (Távoktatás), Budapest (Magyarország)',
        data: gdfSchoolData,
    },
    {
        year: '2014 - 2019',
        name: 'Pázmány Péter Katolikus Egyetem - Információs Technológiai Kar, Budapest (Magyarország)',
        data: pazmanySchoolData,
    },
    {
        year: '2011 - 2014',
        name: 'Wattay Középiskola és Szakiskola, Kiskőrös (Magyarország)',
        data: wattaySchoolData,
    },
    {
        year: '2008 - 2011',
        name: 'Kiskőrösi Petőfi Sándor Evangélikus Óvoda, Általános Iskola, Gimnázium és Kertészeti Szakközépiskola, Kiskőrös',
        data: petofiSchoolData,
    },
];

export function SchoolSection() {
    return (
        <Section icon={SchoolIcon} title='Tanulmányok'>
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
                    />
                ))}
            </Timeline>
        </Section>
    );
}
