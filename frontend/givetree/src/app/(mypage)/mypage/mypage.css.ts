import colorPalette from '@/styles/tokens/colorPalette';
import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: `linear-gradient(to top, ${colorPalette.primary[700]} 70%, ${colorPalette.primary[300]})`,
});

export const modifyButton = style({
  display: 'flex',
  position: 'absolute',
  top: '11%',
  left: '55%',
  marginLeft: 'auto',
  marginRight: '1rem',
  marginTop: '0.5rem',
  width: '48px',
  justifyContent: 'flex-end',
});

export const mainContainer = style({
  marginTop: '70px',
  position: 'relative',
  overflow: 'visible',
});

export const profileConatainer = style({
  backgroundColor: '#fff',
  borderTopLeftRadius: '50%',
  borderTopRightRadius: '50%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const profileImg = style({
  position: 'absolute',
  marginTop: 'auto',
  top: '-60px',
  zIndex: '1',
  borderRadius: '50%',
});

export const tabBox = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  width: '100%',
});

export const tab = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
});

export const IconBox = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
});

export const subContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: '1.25rem 2rem',
});

export const introduceBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  width: '100%',
  padding: '1.5rem 2rem',
  gap: '1rem',
});
