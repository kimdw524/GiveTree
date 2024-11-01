import { globalStyle } from '@vanilla-extract/css';

import colorPalette from '@/styles/tokens/colorPalette';
import color from '@/styles/tokens/color';

globalStyle('*', {
  margin: '0',
  boxSizing: 'border-box',
  overflow: 'auto',
  fontFamily: 'inherit',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('*::-webkit-scrollbar', {
  width: '0.25rem',
  height: '0.25rem',
});

globalStyle('*::-webkit-scrollbar-thumb', {
  borderRadius: '0.75rem',
  backgroundColor: color.grey.A400,
});

globalStyle('*::-webkit-scrollbar-track', {
  backgroundColor: 'transparent',
});

globalStyle('body', {
  color: colorPalette.text[900],
});

globalStyle('svg', {
  display: 'block',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'inherit',
});
