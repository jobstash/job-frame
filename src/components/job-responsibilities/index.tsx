import { JobDetails } from '~/core/types';
import { JOB_TABS } from '~/core/constants';

import { JobOG } from '../job-og';
import { BodyTitle } from '../body-title';
import { BodyList } from '../body-list';

interface Props {
  job: JobDetails;
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

export const JobResponsibilities = ({ job }: Props) => {
  const { responsibilities } = job;

  return (
    <JobOG job={job} activeTab={JOB_TABS.RESPONSIBILITIES}>
      <div style={containerStyle}>
        <BodyTitle text="Responsibilities" />
        <BodyList items={responsibilities} />
      </div>
    </JobOG>
  );
};
