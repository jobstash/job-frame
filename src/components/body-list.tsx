import { MULTI_STRING_LIMIT } from '~/core/constants';

import { BodyText } from './body-text';

interface Props {
  items: string[];
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  paddingLeft: '1.5rem',
};

export const BodyList = ({ items }: Props) => {
  const hasEllipsis = items.length > MULTI_STRING_LIMIT;
  const _items = hasEllipsis ? items.splice(0, MULTI_STRING_LIMIT) : items;

  return (
    <div style={containerStyle}>
      {_items.map((text) => (
        <BodyText key={text} text={`• ${text}`} />
      ))}

      {hasEllipsis && <BodyText text="..." />}
    </div>
  );
};
