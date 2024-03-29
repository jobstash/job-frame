import { JobDetails } from '~/core/types';
import { JobTabText } from '~/core/constants';

import { createJobTabs } from './create-job-tabs';

import { GradientBorder } from '../gradient-border';
import { JobTabs } from '../job-tabs';

interface Props {
  job: JobDetails;
  activeTab: JobTabText;
  children: React.ReactNode;
  childrenRootStyle?: React.CSSProperties;
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  height: '100%',
  width: '100%',
  padding: '1em',
  paddingTop: '1.5em',
  background: '#17101F',
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
  backgroundColor: '#1e1e1e',
  width: '100%',
};

export const JobOG = ({
  activeTab,
  job,
  children,
  childrenRootStyle,
}: Props) => {
  const tabs = createJobTabs(activeTab, job);

  return (
    <div style={containerStyle}>
      <JobTabs tabs={tabs} />

      <GradientBorder>
        <div style={childrenRootStyle ?? childrenContainerStyle}>
          {children}
        </div>
      </GradientBorder>
    </div>
  );
};
