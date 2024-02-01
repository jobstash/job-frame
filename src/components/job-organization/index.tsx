import { JobDetails } from '~/core/types';
import { JOB_TABS } from '~/core/constants';

import { JobOrgFundingRounds } from './funding-rounds';

import { JobOG } from '../job-og';
import { Divider } from '../divider';
import { BodyText } from '../body-text';
import { JobOrgHeader } from '../job-org-header';

interface Props {
  job: JobDetails;
}

const childrenRootStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '1.5rem',
  color: 'white',
  borderRadius: '1.5em',
  backgroundColor: '#1e1e1e',
  width: '100%',
};

export const JobOrganization = ({ job }: Props) => {
  const hasFundingRounds = job.organization.fundingRounds.length > 0;
  return (
    <JobOG
      job={job}
      activeTab={JOB_TABS.ORGANIZATION}
      childrenRootStyle={childrenRootStyle}
    >
      <JobOrgHeader job={job} withTags={false} />
      <Divider />
      <BodyText text={job.organization.description} />
      {hasFundingRounds && <Divider />}
      <JobOrgFundingRounds fundingRounds={job.organization.fundingRounds} />
      {/* <Divider /> */}
    </JobOG>
  );
};
