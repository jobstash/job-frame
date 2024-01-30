import { InfoTagProps } from '~/core/types';

import { ExternalIcon } from './icons/external-icon';
import { BodyText } from './body-text';

interface Props {
  tag: InfoTagProps;
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  height: '1.5rem',
  alignItems: 'center',
  justifyContent: 'center',
};

const textContainerStyle: React.CSSProperties = {
  display: 'flex',
  paddingLeft: '0.5rem',
};

export const InfoTag = ({ tag }: Props) => {
  const { text, icon, showExternalIcon } = tag;

  return (
    <div style={containerStyle}>
      {icon}
      <div style={textContainerStyle}>
        <BodyText text={text} />
      </div>
      {showExternalIcon && <ExternalIcon />}
    </div>
  );
};
