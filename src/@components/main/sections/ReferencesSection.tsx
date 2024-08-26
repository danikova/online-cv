import BaseSection from "./BaseSection";
import { FaGithub } from "react-icons/fa";
import { FormattedMessage, useIntl } from "react-intl";
import { LinkChip } from "./SkillsSection";

export function ReferencesSection() {
  const intl = useIntl();

  return (
    <BaseSection
      icon={FaGithub}
      title={intl.formatMessage({ id: "references.sectionTitle" })}
    >
      <div className="flex flex-col gap-4">
        <div>
          <h5 className="font-bold mb-4">Online-CV</h5>
          <div>
            <LinkChip
              label="https://github.com/danikova/online-cv"
              href="https://github.com/danikova/online-cv"
            />
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-4">Event Horizon</h5>
          <div>
            <LinkChip
              label="https://github.com/danikova/event-horizon"
              href="https://github.com/danikova/event-horizon"
            />
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-4">Project Messenger</h5>
          <div>
            <LinkChip
              label="https://github.com/danikova/project-messenger"
              href="https://github.com/danikova/project-messenger"
            />
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
