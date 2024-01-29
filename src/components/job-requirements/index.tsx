import { JobDetails } from '~/core/types';
import { JOB_TABS } from '~/core/constants';

import { JobOG } from '../job-og';
import { BodyList } from '../body-list';
import { BodyTitle } from '../body-title';

interface Props {
  job: JobDetails;
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

export const JobRequirements = ({ job }: Props) => {
  const { requirements } = job;

  return (
    <JobOG job={job} activeTab={JOB_TABS.REQUIREMENTS}>
      <div style={containerStyle}>
        <BodyTitle text="Requirements" />
        <BodyList items={requirements} />
      </div>
    </JobOG>
  );
};
