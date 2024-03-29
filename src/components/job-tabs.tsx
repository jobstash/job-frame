import { Tab } from '~/core/types';

import { GradientBorder } from './gradient-border';

interface Props {
  tabs: Tab[];
}

const tabContainerStyle: React.CSSProperties = {
  display: 'flex',
  background: '#141317',
  borderRadius: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
};

const tabsContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  color: 'white',
};

const textStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  lineHeight: '1.5rem',
  fontWeight: '900',
  color: 'white',
};

export const JobTabs = ({ tabs }: Props) => {
  return (
    <div style={tabsContainerStyle}>
      {tabs.map(({ text, isActive }) => (
        <JobTab key={text} text={text} isActive={isActive} />
      ))}
    </div>
  );
};

export const JobTab = ({ text, isActive }: Tab) => {
  const color = isActive ? undefined : '#4B4B4B';

  return (
    <div style={{ display: 'flex', borderRadius: '0.5em' }}>
      <GradientBorder color={color} borderRadius="0.5rem">
        <div style={tabContainerStyle}>
          <span style={textStyle}>{text}</span>
        </div>
      </GradientBorder>
    </div>
  );
};
