import { SchoolSection } from './SchoolSection';
import { WorkSection } from './WorkSection';
import { LanguagesSection } from './LanguagesSection';
import { HobbySection } from './HobbySection';
import { SkillsSection } from './SkillsSection';

import HoverContainer from '@components/HoverContainer';

const sectionList = [
  WorkSection,
  SkillsSection,
  SchoolSection,
  LanguagesSection,
  HobbySection
];

export function Sections() {
  return (
    <>
      {sectionList.map((Section, i) => <HoverContainer key={`section-${i}`} className='mb-8 p-8 w-full z-0'>
        <Section />
      </HoverContainer>)}
    </>
  );
}
