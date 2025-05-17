import BaseSection from "./BaseSection";
import { MdWork } from "react-icons/md";
import humanizeDuration from "humanize-duration";
import { useLocale } from "@lang";
import { FormattedMessage, useIntl } from "react-intl";
import Timeline, { TimelineItem } from "@components/Timeline";
import { useDayJs } from "@utils/hooks";
import { useMemo } from "react";
import dayjs from "dayjs";

const sumWorkData = [
  {
    company: "work.nokia",
    timeline: [
      {
        from: "2024.01.01",
        to: new Date(),
        present: true,
        title: "work.nokiaWebGUILeadDev.title",
        caption: "work.nokiaWebGUILeadDev.caption",
      },
      {
        from: "2022.06.01",
        to: "2024.01.01",
        present: true,
        title: "work.nokiaWebGUIDev.title",
        caption: "work.nokiaWebGUIDev.caption",
      },
      {
        from: "2020.01.01",
        to: "2022.06.01",
        title: "work.nokiaSWSpecialist.title",
        caption: "work.nokiaSWSpecialist.caption",
      },
      {
        from: "2019.07.01",
        to: "2020.01.01",
        title: "work.nokiaVerificationSpecialist.title",
        caption: "work.nokiaVerificationSpecialist.caption",
      },
      {
        from: "2018.04.01",
        to: "2019.07.01",
        title: "work.nokiaDevOpsEngineer.title",
        caption: "work.nokiaDevOpsEngineer.caption",
      },
      {
        from: "2017.04.01",
        to: "2018.04.01",
        title: "work.nokiaSWDeveloperIntern.title",
        caption: "work.nokiaSWDeveloperIntern.caption",
      },
    ],
  },
  {
    company: "work.cadline",
    timeline: [
      {
        from: "2016.06.01",
        to: "2016.08.01",
        title: "work.cadlineSWDeveloperIntern.title",
        caption: "work.cadlineSWDeveloperIntern.caption",
      },
    ],
  },
];

function WorkYears({ from, to, present = false }) {
  const { locale } = useLocale();

  const fromDate = useMemo(() => new Date(from), [from]);
  const toDate = useMemo(() => new Date(to), [to]);

  const fromStr = useDayJs(fromDate, "YYYY MMM");
  const toStr = useDayJs(toDate, "YYYY MMM");

  const durationText = useMemo(
    () =>
      // @ts-ignore
      humanizeDuration(toDate - fromDate, {
        language: locale,
        units: ["y", "mo"],
        round: true,
      }),
    [fromDate, toDate],
  );

  return (
    <div className="text-slate-500">
      <p>
        {fromStr}
        <span className="px-1">-</span>
        {present ? "" : toStr}
      </p>
      <p>{durationText}</p>
    </div>
  );
}

export function WorkSection() {
  const intl = useIntl();

  return (
    <BaseSection
      icon={MdWork}
      title={intl.formatMessage({ id: "work.sectionTitle" })}
    >
      {sumWorkData.map((item, i) => {
        const sumWorkTimeInMonths = item.timeline.reduce((acc, curr) => {
          const fromDate = dayjs(curr.from);
          const toDate = curr.present ? dayjs() : dayjs(curr.to);
          return acc + toDate.diff(fromDate, "month");
        }, 0);
        const inYears = Math.round(sumWorkTimeInMonths / 12);

        return (
          <div key={`company-list-${i}`}>
            <h4 className="text-lg mb-4 font-bold">
              <FormattedMessage id={item.company} />{" "}
              {inYears >= 1 && (
                <span className="opacity-50">
                  (
                  <FormattedMessage
                    id="work.sumYearsLabel"
                    values={{ count: inYears }}
                  />
                  )
                </span>
              )}
            </h4>
            <Timeline>
              {item.timeline.map((timelineData, j) => (
                <TimelineItem
                  key={`timeline-item-${j}`}
                  oppContent={
                    <WorkYears
                      from={timelineData.from}
                      to={timelineData.to}
                      present={timelineData.present}
                    />
                  }
                  last={item.timeline.length - 1 === j}
                >
                  <h5 className="font-bold">
                    <FormattedMessage id={timelineData.title} />
                  </h5>
                  <div
                    className={`${
                      item.timeline.length - 1 === j ? "" : "mb-4"
                    }`}
                  >
                    <FormattedMessage id={timelineData.caption} />
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        );
      })}
    </BaseSection>
  );
}
