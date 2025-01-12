import { style } from '@vanilla-extract/css';
import colorPalette from '@/styles/tokens/colorPalette';

// 최상위 부모
export const cashbox = style({
  width: '100%',
  backgroundColor: '#f5f5f5'
});

// 기업로고
export const campaignImage = style({
  width: '65px',
  height: '65px',
  borderRadius: '35px',
  padding: '10px',
  flexShrink: '0',
  border: `1px solid ${colorPalette.grey[400]}`,
});

// 금액 입력 박스
export const inputBox = style({
  margin: '30px 0 15px 0',
});

// 금액 입력 Input
export const amountInput = style({
  width: '100%',
  padding: '10px',
  border: 'none',
  fontSize: '20px',
  borderBottom: `2px solid ${colorPalette.grey[400]}`,
  textAlign: 'right',
  outline: 'none',
  '::placeholder': {
    textAlign: 'left',
    color: colorPalette.grey[600],
  },
  ':focus': {
    borderBottom: `2px solid ${colorPalette.primary[400]}`,
  },
});

// 금액 버튼 스타일
export const amountButton = style({
  padding: '8px 16px',
  fontSize: '16px',
  fontWeight: '600',
  color: colorPalette.grey[700],
  backgroundColor: 'white',
  border: `1px solid ${colorPalette.grey[700]}`,
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: colorPalette.primary[50],
  },
});

// 결제 박스
export const moneybox = style({
  justifyContent: 'space-between',
  backgroundColor: colorPalette.primary[50],
  padding: '20px 15px',
  borderRadius: '5px',
});

// 후원하기 버튼
export const giveButton = style({
  position: 'fixed',
  bottom: '46px',
  left: '0',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});