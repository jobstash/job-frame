import { JobDetails } from '~/core/types';
import { JOB_TABS } from '~/core/constants';

import { JobOG } from '../job-og';
import { Divider } from '../divider';
import { BodyText } from '../body-text';
import { BodyTitle } from '../body-title';

interface Props {
  job: JobDetails;
}

export const JobOrganization = ({ job }: Props) => {
  const {
    organization: { name, description },
  } = job;

  return (
    <JobOG job={job} activeTab={JOB_TABS.ORGANIZATION}>
      <BodyTitle text={name} />
      <Divider />
      <BodyText text={description} />
    </JobOG>
  );
};
