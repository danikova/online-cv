import BaseSection from './BaseSection';
import BarChartIcon from '@material-ui/icons/BarChart';
import { FormattedMessage, useIntl } from 'react-intl';

const globalCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});

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
  const intl = useIntl();

  return (
    <BaseSection
      icon={BarChartIcon}
      title={intl.formatMessage({ id: 'skills.sectionTitle' })}
    >
      {sumSkillData.map((item, i) => (
        <div key={`skill-item-${i}`}>
          <div className='flex'>
            <h5 className='font-medium'>
              {item.name}
            </h5>
            <div className='flex flex-auto pl-8 ml-0 m-auto'>
              <div className='w-full h-[5px] bg-slate-300 rounded-md overflow-hidden'>
                <div className='h-[5px] bg-primary-900' style={{
                  width: `${item.percent || 0}%`
                }} />
              </div>
            </div>
          </div>
          <div
          />
          <div className='mb-4'>
            <FormattedMessage id={item.description} />
          </div>
          <div className='flex flex-wrap gap-2 mb-8'>
            {item.skillChips.sort(globalCollator.compare).map((chipName) => {
              return <Chip
                key={chipName}
                label={chipName}
                href={item.urlTemplate && item.urlTemplate(chipName)}
              />
            })}
          </div>
        </div>
      ))}
    </BaseSection>
  );
}

function Chip({ label, href }) {
  return <a
    className='
      px-[8px] py-[2px] rounded-full after:rounded-full text-primary-900
      hover:text-slate-100 hover:bg-primary-900 cm-primary-shadow
    '
    href={href}>
    {label}
  </a>
}