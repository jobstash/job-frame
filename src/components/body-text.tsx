interface Props {
  text: string | null;
}

const textStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  color: '#ffffffbf',
};

export const BodyText = ({ text }: Props) => {
  if (!text) return null;

  return <span style={textStyle}>{text}</span>;
};
