import { SchoolSection } from './SchoolSection';
import { WorkSection } from './WorkSection';
import { LanguageSection } from './LanguageSection';
import { HobbySection } from './HobbySection';
import { SkillsSection } from './SkillsSection';

import HoverContainer from '@components/HoverContainer';

const sectionList = [
  WorkSection,
  SkillsSection,
  SchoolSection,
  LanguageSection,
  HobbySection
];

export function Sections() {
  return (
    <>
      {sectionList.map((Section, i) =>
        <div key={`section-${i}`}>
          <HoverContainer className='mb-8 p-8 w-full z-0 print:p-0 print:mb-12'>
            <Section />
          </HoverContainer>
        </div>
      )}
    </>
  );
}
