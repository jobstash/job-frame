interface Props {
  text: string | null;
}

const textStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
  fontWeight: 600,
  color: 'white',
};

export const BodyTitle = ({ text }: Props) => {
  if (!text) return null;

  return <span style={textStyle}>{text}</span>;
};
