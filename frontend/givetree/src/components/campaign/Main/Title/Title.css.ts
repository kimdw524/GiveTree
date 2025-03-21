import colorPalette from '@/styles/tokens/colorPalette';
import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100vw',
  height: '3.5rem',
  alignItems: 'center',
  padding: '0 0.85rem',
  backgroundColor: colorPalette.primary[300],
  color: '#fff',
});

export const leftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  marginLeft: '0.25rem',
});

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
});
