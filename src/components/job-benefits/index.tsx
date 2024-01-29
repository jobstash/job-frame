import { JobDetails } from '~/core/types';
import { JOB_TABS } from '~/core/constants';

import { JobOG } from '../job-og';
import { BodyList } from '../body-list';
import { BodyTitle } from '../body-title';

interface Props {
  job: JobDetails;
}

const outerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const innerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

export const JobBenefits = ({ job }: Props) => {
  const { benefits } = job;

  return (
    <JobOG job={job} activeTab={JOB_TABS.BENEFITS}>
      <div style={outerStyle}>
        <div style={innerStyle}>
          <BodyTitle text="Benefits" />
          <BodyList items={benefits} />
        </div>
      </div>
    </JobOG>
  );
};
