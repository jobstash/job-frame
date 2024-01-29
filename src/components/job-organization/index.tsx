import { JobDetails } from '~/core/types';
import { JOB_TABS } from '~/core/constants';

import { JobOG } from '../job-og';
import { Divider } from '../divider';
import { BodyText } from '../body-text';

interface Props {
  job: JobDetails;
}

const nameStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
};

export const JobOrganization = ({ job }: Props) => {
  const {
    organization: { name, description },
  } = job;

  return (
    <JobOG job={job} activeTab={JOB_TABS.ORGANIZATION}>
      <span style={nameStyle}>{name}</span>
      <Divider />
      <BodyText text={description} />
    </JobOG>
  );
};
