import { useEffect } from "react";
import BaseSection from "./BaseSection";
import { MdBarChart } from "react-icons/md";
import { FormattedMessage, useIntl } from "react-intl";

const globalCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

const sumSkillData = [
  {
    name: "Typescript / JavaScript",
    percent: 80,
    percentColor: "#F0DB4F",
    description: "skills.js.description",
    skillChips: [
      "ag-grid-community",
      "ag-grid-enetrprise",
      "@material-ui/core",
      "axios",
      "formik",
      "history",
      "notistack",
      "react",
      "react-contextmenu",
      "react-query",
      "moment",
      "redux",
      "react-router-dom",
      "draft-js",
      "react-dropzone",
      "react-facebook-login",
      "react-google-login",
      "react-helmet",
      "react95",
      "socket.io-client",
      "@hapi/joi",
      "chalk",
      "google-auth-library",
      "mongoose",
      "socket.io",
      "jest",
      "supertest",
      "cypress",
      "tailwindcss",
      "next",
      "@headlessui/react",
      "eslint",
      "jotai",
      "pocketbase",
      "react-hook-form",
      "react-icons",
      "zod",
      "@faker-js/faker",
      "deasync",
      "dotenv",
      "express",
      "lodash",
      "lokijs",
      "morgan",
      "openapi-backend",
      "yaml",
      "mustache",
      "nodemon",
      "cross-env",
      "vite",
      "source-map-explorer",
      "i18next",
      "js-cookie",
      "openapi-fetch",
      "dayjs",
      "openapi-typescript",
      "js-yaml",
      "monaco-editor",
      "monaco-yaml",
      "@monaco-editor/react",
      "@tanstack/react-query",
      "@rjsf/core",
      "husky",
      "lint-staged",
    ],
    urlTemplate: (pkgName) => `https://www.npmjs.com/package/${pkgName}`,
  },
  {
    name: "Python",
    percent: 70,
    percentColor: "#4B8BBE",
    description: "skills.python.description",
    skillChips: [
      "Django",
      "djangorestframework",
      "aiohttp",
      "lxml",
      "pytest",
      "openpyxl",
      "jsonschema",
      "pyang",
      "Pillow",
      "celery",
      "websocket-client",
      "daphne",
      "PyYAML",
      "redis",
      "rarfile",
      "fastapi",
      "pydantic",
    ],
    urlTemplate: (pkgName) => `https://pypi.org/project/${pkgName}`,
  },
  {
    name: "Linux",
    percent: 65,
    percentColor: "#E95420",
    description: "skills.linux.description",
    skillChips: ["Lubuntu", "Ubuntu", "CentOS", "Rocky_Linux", "Alpine_Linux"],
    urlTemplate: (distroName) => `https://en.wikipedia.org/wiki/${distroName}`,
  },
  {
    name: "Docker",
    percent: 63,
    percentColor: "#2496ed",
    description: "skills.docker.description",
    skillChips: [
      "node",
      "mysql",
      "postgres",
      "mongo-express",
      "mongo",
      "busybox",
      "ubuntu",
      "redis",
      "mariadb",
      "httpd",
      "php",
      "debian",
      "jenkins",
      "vault",
      "matomo",
      "mono",
      "nginx",
      "registry",
      "docker",
      "centos",
      "python",
      "minio",
    ],
    urlTemplate: (imageName) => `https://hub.docker.com/_/${imageName}`,
  },
  {
    name: "Others",
    description: "skills.others.description",
    skillChips: [
      "Heroku",
      "MongoDB",
      "MongoDB Atlas",
      "Jenkins",
      "PocketBase",
      "Firebase",
      "SQLite",
      "Git",
      "GitHub",
      "GitLab",
      "Gerrit",
      "Go",
      "k8s",
      "k9s",
      "helm",
    ],
  },
];

export function SkillsSection() {
  const intl = useIntl();

  useEffect(() => {
    for (const key in sumSkillData) {
      const usedChips = new Set<string>();
      for (const chip of sumSkillData[key].skillChips) {
        if (!chip) continue;
        if (usedChips.has(chip))
          throw Error(`this chip: ${chip} is already used once`);
        usedChips.add(chip);
      }
    }
  });

  return (
    <BaseSection
      icon={MdBarChart}
      title={intl.formatMessage({ id: "skills.sectionTitle" })}
    >
      {sumSkillData.map((item, i) => (
        <div key={`skill-item-${i}`} className="mb-8 last-of-type:mb-0">
          <div className="flex">
            <h5 className="font-bold">{item.name}</h5>
            {item.percent && (
              <div className="flex flex-auto pl-8 ml-0 m-auto">
                <div className="w-full h-[5px] bg-slate-300 rounded-md overflow-hidden">
                  <div
                    className="h-[5px] bg-primary-900"
                    style={{
                      width: `${item.percent || 0}%`,
                      backgroundColor: item.percentColor,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div />
          <div className="mb-4">
            <FormattedMessage id={item.description} />
          </div>
          <div className="flex flex-wrap gap-2">
            {item.skillChips.sort(globalCollator.compare).map((chipName) => {
              return (
                <LinkChip
                  key={chipName}
                  label={chipName}
                  href={item.urlTemplate && item.urlTemplate(chipName)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </BaseSection>
  );
}

export function LinkChip({ label, href }: { label: string; href?: string }) {
  if (href)
    return (
      <a
        className="
      px-[8px] py-[2px] rounded-full after:rounded-full text-primary-900
      hover:text-slate-100 hover:bg-primary-900 cm-primary-shadow
      print:shadow-none max-md:shadow-none print:ring-1 print:ring-slate-400 print:text-slate-500
    "
        href={href}
      >
        {label}
      </a>
    );
  return (
    <div
      className="
      px-[8px] py-[2px] rounded-full after:rounded-full text-primary-900
      hover:text-slate-100 hover:bg-primary-900 cm-primary-shadow
      print:shadow-none max-md:shadow-none print:ring-1 print:ring-slate-400 print:text-slate-500
    "
    >
      {label}
    </div>
  );
}
