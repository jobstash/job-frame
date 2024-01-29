interface Props {
  text: string | null;
}

const textStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  color: '#ffffffbf',
};

export const BodyText = ({ text }: Props) => {
  if (!text) return null;

  return <span style={textStyle}>{text}</span>;
};
