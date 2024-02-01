import { Tag } from '~/core/types';

const colorPool = [
  '#f87171',
  '#CAE402',
  '#E2BF2B',
  '#FFE2AD',
  '#FFE6E2',
  '#DEF8EE',
  '#77CBBE',
  '#F79A7E',
  '#FB7D43',
  '#ECC6F7',
  '#F3A5F2',
  '#EC88E1',
];

function getColorIndex(uuid: string, N: number) {
  let pseudorandomBytes =
    uuid.slice(0, 14) + uuid.slice(15, 19) + uuid.slice(20);
  pseudorandomBytes = pseudorandomBytes.replaceAll('-', '');
  let accumulator = 0;

  const pseudoMatch = pseudorandomBytes.match(/.{1,12}/g);
  if (!pseudoMatch) return 0;

  for (const a of pseudoMatch) {
    accumulator = (accumulator + (Number.parseInt(a, 16) % N)) % N;
  }

  return accumulator;
}

interface Props {
  tag: Tag;
}

export const JobSkill = ({ tag }: Props) => {
  const { id, name } = tag;

  const colorIndex = getColorIndex(id, colorPool.length);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    borderRadius: '0.125rem',
    padding: '0.5rem',
    paddingLeft: '0.875rem',
    paddingRight: '0.875rem',
    border: `2px solid ${colorPool[colorIndex]}`,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: '1500',
  };

  return <div style={containerStyle}>{name.toUpperCase()}</div>;
};
