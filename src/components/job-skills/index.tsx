import { JobDetails } from '~/core/types';
import { JOB_TABS } from '~/core/constants';

import { JobSkill } from './job-skill';

import { JobOG } from '../job-og';
import { BodyTitle } from '../body-title';
import { BodyText } from '../body-text';

interface Props {
  job: JobDetails;
}

const skillsTitle = 'Skills';
const skillsText = 'Skills that are required to be successful at the job';

const textContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
};

const tagsContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  maxHeight: '320px',
  overflow: 'hidden',
};

export const JobSkills = ({ job }: Props) => {
  const { tags } = job;

  return (
    <JobOG job={job} activeTab={JOB_TABS.SKILLS}>
      <div style={textContainerStyle}>
        <BodyTitle text={skillsTitle} />
        <BodyText text={skillsText} />
      </div>

      <div style={tagsContainerStyle}>
        {tags.map((tag) => (
          <JobSkill key={tag.id} tag={tag} />
        ))}
      </div>
    </JobOG>
  );
};
