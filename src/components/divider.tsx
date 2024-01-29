import React from 'react';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  height: '1rem',
  alignItems: 'center',
};

const hrStyle: React.CSSProperties = {
  width: '100%',
  borderTopWidth: '1px',
  borderColor: '#ffffff19',
};

export const Divider = () => {
  return (
    <div style={containerStyle}>
      <hr style={hrStyle} />
    </div>
  );
};
