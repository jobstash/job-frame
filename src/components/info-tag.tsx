import { InfoTagProps } from '~/core/types';

import { ExternalIcon } from './icons/external-icon';

interface Props {
  tag: InfoTagProps;
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  height: '1.5rem',
  alignItems: 'center',
  justifyContent: 'center',
};

const textStyle: React.CSSProperties = {
  paddingLeft: '0.5rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
};

export const InfoTag = ({ tag }: Props) => {
  const { text, icon, showExternalIcon } = tag;

  return (
    <div style={containerStyle}>
      {icon}
      <span style={textStyle}>{text}</span>
      {showExternalIcon && <ExternalIcon />}
    </div>
  );
};
