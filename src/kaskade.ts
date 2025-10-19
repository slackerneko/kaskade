import react from 'react';

export default {
  create: (node: react.ReactNode, callback) => {},
  apply: () => '',
}

export const oklch = (l: number, c: number, h: number) => `oklch(${l} ${c} ${h})`;

export const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const grid = ({
  columns = 'repeat(auto-fit, minmax(150px, 1fr))',
  gap = '10px',
}) => ({
  display: 'grid',
  gridTemplateColumns: columns,
  gridGap: gap,
});
