interface Props {
  text: string | null;
}

const textStyle: React.CSSProperties = {
  fontSize: '1.9rem',
  lineHeight: '1.75rem',
  fontWeight: '900',
  color: 'white',
};

export const BodyTitle = ({ text }: Props) => {
  if (!text) return null;

  return <span style={textStyle}>{text}</span>;
};
