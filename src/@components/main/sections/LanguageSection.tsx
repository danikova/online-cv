import BaseSection from "./BaseSection";
import { MdPublic } from "react-icons/md";
import { FormattedMessage, useIntl } from "react-intl";

export function LanguageSection() {
  const intl = useIntl();

  return (
    <BaseSection
      icon={MdPublic}
      title={intl.formatMessage({ id: "lang.sectionTitle" })}
    >
      <div className="flex flex-col gap-4">
        <div>
          <h5 className="font-bold">
            <FormattedMessage id="lang.hungarian" />
          </h5>
          <div>
            <FormattedMessage id="lang.hungarian.levelDescription" />
          </div>
        </div>
        <div>
          <h5 className="font-bold">
            <FormattedMessage id="lang.english" />
          </h5>
          <div>
            <FormattedMessage id="lang.english.levelDescription" />
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
