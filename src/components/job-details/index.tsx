import { JOB_TABS } from '~/core/constants';
import { JobDetails as TJobDetails } from '~/core/types';

import { createJobInfoTags } from './create-job-info-tags';

import { JobOG } from '../job-og';
import { InfoTag } from '../info-tag';
import { Divider } from '../divider';
import { BodyText } from '../body-text';
import { BodyTitle } from '../body-title';

interface Props {
  job: TJobDetails;
}

const infoTagContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
};

const bodyContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

export const JobDetails = ({ job }: Props) => {
  const tags = createJobInfoTags(job);

  return (
    <JobOG job={job} activeTab={JOB_TABS.DETAILS}>
      <BodyTitle text={job.title} />

      <div style={infoTagContainerStyle}>
        {tags.map((tag) => (
          <InfoTag key={tag.text} tag={tag} />
        ))}
      </div>

      <Divider />

      <div style={bodyContainerStyle}>
        <BodyTitle text="Description" />
        <BodyText text={job.description} />
      </div>
    </JobOG>
  );
};
