import { JobDetails } from '~/core/types';
import { JobTabText } from '~/core/constants';

import { createJobTabs } from './create-job-tabs';

import { GradientBorder } from '../gradient-border';
import { JobTabs } from '../job-tabs';

interface Props {
  job: JobDetails;
  activeTab: JobTabText;
  children: React.ReactNode;
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  height: '100%',
  width: '100%',
  padding: '1em',
  background: '#0e0e0e',
  flexDirection: 'column',
  gap: '1.5rem',
};

const childrenContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.5rem',
  color: 'white',
  borderRadius: '1.5em',
  backgroundColor: 'rgb(41,41,41)',
  width: '100%',
};

export const JobOG = ({ activeTab, job, children }: Props) => {
  const tabs = createJobTabs(activeTab, job);

  return (
    <div style={containerStyle}>
      <JobTabs tabs={tabs} />

      <GradientBorder>
        <div style={childrenContainerStyle}>{children}</div>
      </GradientBorder>
    </div>
  );
};
