import { InfoTagProps } from '~/core/types';

import { ExternalIcon } from './icons/external-icon';

interface Props {
  tag: InfoTagProps;
}

const outerStyle: React.CSSProperties = {
  display: 'flex',
  height: '1.5rem',
  flexShrink: 0,
  alignItems: 'center',
  borderRadius: '4px',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingRight: '0.5rem',
};

const textStyle: React.CSSProperties = {
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
};

export const InfoTag = ({ tag }: Props) => {
  const { text, icon, showExternalIcon } = tag;

  return (
    <div style={outerStyle}>
      {icon}
      <span style={textStyle}>{text}</span>
      {showExternalIcon && <ExternalIcon />}
    </div>
  );
};
