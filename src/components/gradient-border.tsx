interface Props {
  children: React.ReactNode;
  color?: React.CSSProperties['background'];
  borderRadius?: React.CSSProperties['borderRadius'];
}

const defaultRadius = '1.5em';

const defaultColor =
  'linear-gradient(to left, rgb(135, 67, 255), rgb(65, 54, 241))';

export const GradientBorder = ({
  children,
  color = defaultColor,
  borderRadius = defaultRadius,
}: Props) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    padding: '2px',
    position: 'relative',
    background: color,
    borderRadius: borderRadius,
  };

  return <div style={containerStyle}>{children}</div>;
};
